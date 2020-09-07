const puppeteer = require('puppeteer');
 

export default async (req, res) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
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