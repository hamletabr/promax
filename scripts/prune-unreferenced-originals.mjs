// Runs automatically after `npm run build` (see "postbuild" in package.json).
//
// Importing the portfolio photos through import.meta.glob makes the build copy
// every ORIGINAL phone photo into dist/_astro alongside the optimised WebP
// versions the pages actually use. That is ~1 MB per photo of dead weight on
// every deploy. This deletes any image in dist/_astro that no built page
// references. Anything referenced is left alone.
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const astro = path.join(dist, "_astro");
if (!fs.existsSync(astro)) process.exit(0);

const html = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".html") || p.endsWith(".css") || p.endsWith(".js") || p.endsWith(".xml")) html.push(fs.readFileSync(p, "utf8"));
  }
})(dist);
const everything = html.join("\n");

let removed = 0, bytes = 0;
for (const f of fs.readdirSync(astro)) {
  if (!/\.(jpe?g|png|gif|webp|avif)$/i.test(f)) continue;
  if (everything.includes(`_astro/${f}`)) continue;
  const p = path.join(astro, f);
  bytes += fs.statSync(p).size;
  fs.unlinkSync(p);
  removed++;
}
if (removed) console.log(`[postbuild] removed ${removed} unreferenced image(s) from dist/_astro (${(bytes / 1048576).toFixed(1)} MB)`);
