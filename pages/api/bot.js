import chromium from 'chrome-aws-lambda';

export default async (req, res) => {
  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: true,
  });


  try {
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
  } catch(err) {
    console.error(err);
    res.send({
      err: err.messsage,
    });
  }

}