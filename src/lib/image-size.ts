import { readFileSync } from "node:fs";
import path from "node:path";

export type Size = { width: number; height: number };

const cache = new Map<string, Size | null>();

function png(b: Buffer): Size | null {
  if (b.length < 24 || b.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}

function gif(b: Buffer): Size | null {
  if (b.length < 10 || b.toString("ascii", 0, 3) !== "GIF") return null;
  return { width: b.readUInt16LE(6), height: b.readUInt16LE(8) };
}

function webp(b: Buffer): Size | null {
  if (b.length < 30 || b.toString("ascii", 0, 4) !== "RIFF" || b.toString("ascii", 8, 12) !== "WEBP") {
    return null;
  }
  const fourcc = b.toString("ascii", 12, 16);
  if (fourcc === "VP8X") {
    return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 };
  }
  if (fourcc === "VP8 ") {
    return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
  }
  if (fourcc === "VP8L" && b[20] === 0x2f) {
    const bits = b.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  return null;
}

function jpeg(b: Buffer): Size | null {
  if (b.length < 4 || b.readUInt16BE(0) !== 0xffd8) return null;
  let i = 2;
  while (i < b.length - 9) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    // SOF0–SOF15 carry the frame size; DHT/JPG/DAC reuse the range but don't.
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
    }
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd9)) { i += 2; continue; }
    i += 2 + b.readUInt16BE(i + 2);
  }
  return null;
}

/**
 * Intrinsic pixel size of an image under `public/`, read at build time.
 *
 * Use it to emit width/height on <img> tags whose src is dynamic, so the
 * browser reserves the right box before the file loads (avoids layout shift).
 * Returns null if the file is missing or an unsupported format — callers
 * should spread the result so the attributes are simply omitted.
 */
export function imageSize(src: string): Size | null {
  if (cache.has(src)) return cache.get(src)!;
  let out: Size | null = null;
  try {
    const buf = readFileSync(path.join(process.cwd(), "public", src));
    out = png(buf) ?? jpeg(buf) ?? gif(buf) ?? webp(buf);
  } catch {
    out = null;
  }
  cache.set(src, out);
  return out;
}
