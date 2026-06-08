import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:4399/";
const out = process.argv[3] || "shot";

const browser = await chromium.launch();

async function gotoWithRetry(page, u) {
  for (let i = 0; i < 25; i++) {
    try {
      await page.goto(u, { waitUntil: "networkidle", timeout: 4000 });
      return true;
    } catch {
      await page.waitForTimeout(1000);
    }
  }
  throw new Error("server never came up at " + u);
}

async function settle(page) {
  // scroll through to trigger IntersectionObserver (reveals + stat counters)
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0; const step = 500;
      const t = setInterval(() => {
        window.scrollBy(0, step); y += step;
        if (y >= document.body.scrollHeight + 1000) { clearInterval(t); res(); }
      }, 80);
    });
  });
  await page.waitForTimeout(700);
  // belt-and-suspenders: force any still-hidden reveal elements visible for the capture
  await page.addStyleTag({ content: ".reveal{opacity:1 !important;transform:none !important;}" });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
}

// Desktop
const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await gotoWithRetry(d, url);
await settle(d);
await d.screenshot({ path: `${out}-desktop-fold.png` });
await d.screenshot({ path: `${out}-desktop-full.png`, fullPage: true });

// Mobile
const m = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await gotoWithRetry(m, url);
await settle(m);
await m.screenshot({ path: `${out}-mobile-fold.png` });
await m.screenshot({ path: `${out}-mobile-full.png`, fullPage: true });

await browser.close();
console.log("screenshots written:", out);
