const puppeteer = require('puppeteer');

async function scrapeLenovoNotebooks() {
  try {
    console.log('Iniciando o Puppeteer...');
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    const notebooks = [];

    for (let i = 1; i <= 20; i++) {
      console.log(`Acessando a página ${i}...`);
      await page.goto(`https://webscraper.io/test-sites/e-commerce/static/computers/laptops?page=${i}`, {
        waitUntil: 'load',
        timeout: 0
      });

      await page.waitForSelector('.card.thumbnail');

      console.log('Coletando notebooks Lenovo...');
      const items = await page.evaluate(() => {
        const itemElements = Array.from(document.querySelectorAll('.card.thumbnail'));
        return itemElements.map(item => {
          const title = item.querySelector('.title')?.innerText || 'Sem título';
          const priceText = item.querySelector('.price')?.innerText || '0';
          const price = parseFloat(priceText.replace('$', '')) || 0;
          const description = item.querySelector('.description')?.innerText || 'Sem descrição';
          const link = item.querySelector('a')?.href || '#';

          if (title.toLowerCase().includes('lenovo')) {
            return { title, price, description, link };
          }
        }).filter(Boolean);
      });

      notebooks.push(...items);

      console.log(`Total de notebooks coletados até agora: ${notebooks.length}`);
    }

    await browser.close();

    console.log('Total de notebooks coletados:', notebooks.length);
    return notebooks;
  } catch (error) {
    console.error('Erro no scraping:', error);
  }
}

module.exports = scrapeLenovoNotebooks;
