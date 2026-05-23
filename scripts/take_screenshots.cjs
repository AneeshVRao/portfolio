const { chromium } = require('playwright');
const path = require('path');

async function main() {
  console.log('Launching headless browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Capture page console logs
  page.on('console', msg => console.log(`[PAGE CONSOLE] ${msg.type()}: ${msg.text()}`));
  page.on('pageerror', err => console.log(`[PAGE ERROR]: ${err.message}`));
  page.on('requestfailed', req => console.log(`[REQUEST FAILED]: ${req.url()} - ${req.failure().errorText}`));

  await page.setViewportSize({ width: 1280, height: 800 });

  try {
    console.log('Navigating to http://localhost:5173/ ...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

    // Scroll to hero and wait
    const hero = await page.$('#hero');
    if (hero) {
      await hero.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      console.log('Taking hero section screenshot...');
      await hero.screenshot({ path: path.join(__dirname, '../docs/screenshots', 'hero.png') });
    } else {
      console.log('Hero section not found');
    }

    // Scroll to projects and wait
    const projects = await page.$('#projects');
    if (projects) {
      await projects.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1500); // Wait for animations
      console.log('Taking projects section screenshot...');
      await projects.screenshot({ path: path.join(__dirname, '../docs/screenshots', 'projects.png') });
    } else {
      console.log('Projects section not found');
    }

    console.log('Taking full page screenshot...');
    await page.screenshot({ path: path.join(__dirname, '../docs/screenshots', 'fullpage.png'), fullPage: true });

    console.log('Screenshots taken successfully!');
  } catch (err) {
    console.error('Error during screenshot generation:', err);
  } finally {
    await browser.close();
  }
}

main();
