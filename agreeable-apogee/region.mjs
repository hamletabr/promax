import { chromium } from "playwright";
const sel = process.argv[2] || ".promo-strip";
const out = process.argv[3] || "region.png";
const W = Number(process.argv[4] || 1440);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: 900 }, deviceScaleFactor: 2 });
for (let i = 0; i < 25; i++) {
  try { await page.goto("http://localhost:4399/", { waitUntil: "networkidle", timeout: 4000 }); break; }
  catch { await page.waitForTimeout(1000); }
}
await page.addStyleTag({ content: ".reveal{opacity:1!important;transform:none!important}" });
const el = await page.$(sel);
await el.scrollIntoViewIfNeeded();
await page.waitForTimeout(900);
await page.screenshot({ path: out, clip: await page.evaluate((s) => {
  const r = document.querySelector(s).getBoundingClientRect();
  return { x: 0, y: Math.max(0, r.top - 16), width: window.innerWidth, height: Math.min(r.height + 32, 2600) };
}, sel) });
await browser.close();
console.log("region written:", out);
