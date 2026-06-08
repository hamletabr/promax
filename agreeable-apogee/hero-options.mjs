import { chromium } from "playwright";

const imgs = [
  "sl1-min.jpg",
  "photo_hvac-min.jpg",
  "high-photo-min.jpg",
  "furnace-photo-min.jpg",
  "ac-min.jpg",
  "hvac-ductwork-photo-min.jpg",
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 820 } });
for (let i = 0; i < 25; i++) {
  try { await page.goto("http://localhost:4399/", { waitUntil: "networkidle", timeout: 4000 }); break; }
  catch { await page.waitForTimeout(1000); }
}
for (const im of imgs) {
  await page.evaluate((src) => {
    document.querySelector(".hero").style.background =
      `#1a1410 url('/images/${src}') center 30% / cover no-repeat`;
  }, im);
  await page.waitForTimeout(450);
  await page.screenshot({ path: `opt-${im.replace(/\.[^.]+$/, "")}.png` });
}
await browser.close();
console.log("done");
