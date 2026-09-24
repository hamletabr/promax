import { closeSync, openSync, readSync } from "node:fs";

/**
 * When a photo was actually taken, read from its EXIF data.
 *
 * Photos exported from the macOS Photos app get a brand-new file timestamp, so
 * the file's modified date says "today" even for a job done months ago. EXIF
 * survives the export, so it's the only reliable source for the real date.
 *
 * Returns null when there's no EXIF (screenshots, stripped web images, PNGs).
 */
export function exifDate(absPath: string): Date | null {
  let b: Buffer;
  try {
    // EXIF sits in the first few KB; reading the whole photo would mean
    // pulling every multi-megabyte image into memory during a build.
    const fd = openSync(absPath, "r");
    try {
      const buf = Buffer.alloc(128 * 1024);
      const n = readSync(fd, buf, 0, buf.length, 0);
      b = buf.subarray(0, n);
    } finally {
      closeSync(fd);
    }
  } catch {
    return null;
  }
  if (b.length < 4 || b.readUInt16BE(0) !== 0xffd8) return null; // not a JPEG

  let i = 2;
  while (i + 4 <= b.length) {
    if (b[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = b[i + 1];
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd9)) {
      i += 2;
      continue;
    }
    if (marker === 0xda) break; // start of image data — metadata is all behind us
    const len = b.readUInt16BE(i + 2);
    if (len < 2) break;
    if (marker === 0xe1) {
      const seg = b.subarray(i + 4, i + 2 + len);
      if (seg.length > 6 && seg.toString("ascii", 0, 6) === "Exif\0\0") {
        const d = parseTiff(seg.subarray(6));
        if (d) return d;
      }
    }
    i += 2 + len;
  }
  return null;
}

/** Walk the TIFF block inside an EXIF segment looking for a capture date. */
function parseTiff(t: Buffer): Date | null {
  if (t.length < 8) return null;
  const order = t.toString("ascii", 0, 2);
  const le = order === "II";
  if (!le && order !== "MM") return null;

  const u16 = (o: number) => (o + 2 <= t.length ? (le ? t.readUInt16LE(o) : t.readUInt16BE(o)) : 0);
  const u32 = (o: number) => (o + 4 <= t.length ? (le ? t.readUInt32LE(o) : t.readUInt32BE(o)) : 0);
  if (u16(2) !== 42) return null;

  /** Offset of the 12-byte entry for `tag` within the IFD at `ifdOff`. */
  const entryFor = (ifdOff: number, tag: number): number | null => {
    if (ifdOff <= 0 || ifdOff + 2 > t.length) return null;
    const n = u16(ifdOff);
    for (let k = 0; k < n; k++) {
      const e = ifdOff + 2 + k * 12;
      if (e + 12 > t.length) break;
      if (u16(e) === tag) return e;
    }
    return null;
  };

  /** ASCII value of an entry — inline when it fits in 4 bytes, else at an offset. */
  const ascii = (e: number): string | null => {
    const count = u32(e + 4);
    if (count === 0 || count > 64) return null;
    const off = count <= 4 ? e + 8 : u32(e + 8);
    if (off + count > t.length) return null;
    return t.toString("ascii", off, off + count).replace(/\0[\s\S]*$/, "");
  };

  const ifd0 = u32(4);
  const exifPtr = entryFor(ifd0, 0x8769); // pointer to the Exif sub-IFD
  const candidates: [number, number][] = [];
  if (exifPtr !== null) {
    candidates.push([u32(exifPtr + 8), 0x9003]); // DateTimeOriginal — when it was shot
    candidates.push([u32(exifPtr + 8), 0x9004]); // DateTimeDigitized
  }
  candidates.push([ifd0, 0x0132]); // DateTime — last resort, may be an edit date

  for (const [ifd, tag] of candidates) {
    const e = entryFor(ifd, tag);
    const s = e === null ? null : ascii(e);
    const m = s && /^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/.exec(s);
    if (m) {
      const d = new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]);
      if (!Number.isNaN(d.getTime())) return d;
    }
  }
  return null;
}
