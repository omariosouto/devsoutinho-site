import chromium from 'chrome-aws-lambda';

export default async (req, res) => {
  const browser = await chromium.puppeteer.launch({
    // Required
    executablePath: await chromium.executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    // // Optional
    // args: chromium.args,
    // defaultViewport: chromium.defaultViewport,
    // headless: chromium.headless
  });

  const page = await browser.newPage();

  await page.goto('https://www.instagram.com/omariosouto/');

  const instagramProfilePic = await page.evaluate(() => {
    return document.querySelector('[data-testid="user-avatar"]').src;
  });

  await browser.close();

  res.send({
    pics: [
      instagramProfilePic,
    ]
  });
}