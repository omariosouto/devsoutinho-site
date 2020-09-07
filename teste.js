const chromium = require('chrome-aws-lambda');

(async (event, context, callback) => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });

  let page = await browser.newPage();

  await page.goto(event.url || 'https://example.com');

  const result = await page.title();

  console.log(result);
  await browser.close();
})();
