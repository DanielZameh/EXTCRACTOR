import { extractData } from './scraper.js';

const form = document.getElementById('url-form');
const input = document.getElementById('url-input');
const results = document.getElementById('results');
const htmlOutput = document.getElementById('html-output');
const cssOutput = document.getElementById('css-output');
const jsOutput = document.getElementById('js-output');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const url = input.value;

  try {
    const { html, css, js } = await extractData(url);
    htmlOutput.textContent = html;
    cssOutput.textContent = css;
    jsOutput.textContent = js;
    results.classList.remove('hidden');
  } catch (error) {
    console.error(`Error extracting data from ${url}:`, error.message);
  }
});
