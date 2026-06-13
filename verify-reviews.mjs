import { chromium } from "playwright";
const browser = await chromium.launch();
for (let load = 1; load <= 4; load++) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  for (let i = 0; i < 25; i++) {
    try { await page.goto("http://localhost:4399/", { waitUntil: "domcontentloaded", timeout: 4000 }); break; }
    catch { await page.waitForTimeout(800); }
  }
  const visible = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll("#reviews .rev"));
    return cards
      .filter((c) => c.style.display !== "none")
      .map((c) => ({ bucket: c.getAttribute("data-bucket"), name: c.querySelector(".rev__who strong")?.textContent?.trim() }));
  });
  console.log(`Load ${load}: ${visible.length} shown -> ` +
    visible.map((v) => `[b${v.bucket}] ${v.name}`).join("  |  "));
  await page.close();
}
await browser.close();
