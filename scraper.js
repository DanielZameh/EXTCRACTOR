const puppeteer = require('puppeteer');

const extractData = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Extract HTML
  const html = await page.content();

  // Extract CSS (in the <style> tags)
  const css = await page.evaluate(() => {
    const styleTags = Array.from
