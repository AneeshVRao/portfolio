const { chromium } = require('playwright');

async function runTests() {
  console.log('🚀 Starting Playwright Tests...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Capture page console logs and dialogs
  page.on('console', msg => console.log(`[PAGE CONSOLE] ${msg.text()}`));
  page.on('dialog', async dialog => {
    console.log(`[PAGE DIALOG] type: ${dialog.type()}, message: ${dialog.message()}`);
    await dialog.accept();
  });

  try {
    // 1. Navigate to the local server
    console.log('Navigating to http://localhost:5173/ ...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

    // 2. Validate Page Title
    const title = await page.title();
    console.log(`✅ Page Title: "${title}"`);
    if (!title.includes('Aneesh Venkatesha Rao')) {
      throw new Error('Title check failed!');
    }

    // 3. Validate Navbar
    console.log('Checking Navbar...');
    const logoText = await page.textContent('.navbar__logo');
    console.log(`✅ Navbar logo monogram: "${logoText}"`);
    if (!logoText.startsWith('AVR')) throw new Error('Navbar logo monogram is wrong!');

    const navbarLinksCount = await page.locator('.navbar__menu .navbar__link').count();
    console.log(`✅ Number of links in Navbar: ${navbarLinksCount}`);
    if (navbarLinksCount < 3) throw new Error('Not enough navbar links found!');

    // 4. Validate Hero Section
    console.log('Checking Hero Section...');
    // Wait for the typewriter greeting to start typing after the curtain slides up
    await page.waitForFunction(() => {
      const text = document.querySelector('.hero-greeting *:first-child')?.textContent || '';
      return text.includes("Hi");
    }, { timeout: 6000 });
    
    const greetingText = await page.textContent('.hero-greeting *:first-child');
    console.log(`✅ Hero greeting text: "${greetingText}"`);
    if (!greetingText.trim().startsWith("Hi")) throw new Error('Hero greeting is wrong!');

    const roleBadgesCount = await page.locator('.hero-roles .role-line').count();
    console.log(`✅ Number of role badges in Hero: ${roleBadgesCount}`);
    if (roleBadgesCount !== 3) throw new Error('Expected 3 role badges!');

    // 5. Validate About Stats Count-up
    console.log('Checking About Section Stats...');
    // Scroll to About section to trigger animations
    await page.locator('#about').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000); // Wait for count-up animation (1200ms duration)
    const statsTexts = await page.locator('.stats-grid .stat-val').allTextContents();
    console.log('✅ About Section Stats loaded:', statsTexts);
    if (statsTexts.length === 0) throw new Error('No stats cards found!');

    // 6. Validate Projects
    console.log('Checking Projects...');
    const initialProjectsCount = await page.locator('.project-card').count();
    console.log(`✅ Initial number of project cards (Featured): ${initialProjectsCount}`);
    if (initialProjectsCount !== 4) {
      throw new Error(`Expected exactly 4 featured project cards, got ${initialProjectsCount}`);
    }

    console.log('Clicking the "More Projects" button...');
    await page.click('button:has-text("More Projects")');
    await page.waitForTimeout(600); // Wait for expand animation

    const expandedProjectsCount = await page.locator('.project-card').count();
    console.log(`✅ Number of project cards after expanding: ${expandedProjectsCount}`);
    if (expandedProjectsCount !== 12) {
      throw new Error(`Expected exactly 12 project cards in total after expanding (11 projects + 1 GitHub card), got ${expandedProjectsCount}`);
    }

    console.log('Clicking the "Show Less" button...');
    await page.click('button:has-text("Show Less")');
    await page.waitForTimeout(600); // Wait for collapse animation

    const collapsedProjectsCount = await page.locator('.project-card').count();
    console.log(`✅ Number of project cards after collapsing again: ${collapsedProjectsCount}`);
    if (collapsedProjectsCount !== 4) {
      throw new Error(`Expected exactly 4 project cards after collapsing, got ${collapsedProjectsCount}`);
    }

    // 7. Validate FAQ Accordion
    console.log('Checking FAQ Accordion...');
    const faqQuestions = page.locator('.faq-item__header');
    const firstFaqQ = faqQuestions.first();
    console.log('Clicking the first FAQ item...');
    await firstFaqQ.click();
    await page.waitForTimeout(500); // Wait for Framer Motion height transition
    
    // 8. Validate Contact Footer Form
    console.log('Checking Contact Footer Form...');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.fill('.footer-input', 'test-agent@example.com');
    console.log('Submitting the contact form...');
    await page.click('.footer-submit');
    await page.waitForTimeout(500);

    // 9. Capture Responsive Screenshots
    console.log('Capturing responsive screenshots...');
    const fs = require('fs');
    if (!fs.existsSync('docs/screenshots')) {
      fs.mkdirSync('docs/screenshots', { recursive: true });
    }
    const VIEWPORTS = [
      { name: 'mobile',       width: 390,  height: 844  },
      { name: 'tablet',       width: 768,  height: 1024 },
      { name: 'desktop',      width: 1440, height: 900  },
      { name: 'desktop-wide', width: 1920, height: 1080 },
    ]
    for (const vp of VIEWPORTS) {
      await page.setViewportSize({ width: vp.width, height: vp.height })
      await page.waitForTimeout(400) // let layout settle
      await page.screenshot({
        path: `docs/screenshots/${vp.name}.png`,
        fullPage: true
      })
      console.log(`✅ Screenshot captured: ${vp.name} (${vp.width}×${vp.height})`)
    }

    // Capture dark mode screenshot
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.screenshot({ path: 'docs/screenshots/desktop-dark.png', fullPage: true })
    console.log('✅ Screenshot captured: desktop-dark')
    await page.emulateMedia({ colorScheme: 'light' })

    console.log('🎉 All tests completed successfully!');
  } catch (error) {
    console.error('❌ Test failed with error:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

runTests();
