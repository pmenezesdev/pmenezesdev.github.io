// Captura as telas dos projetos em alta resolução (2x) para os cards do portfólio.
// Uso: npm run capture
import { chromium } from 'playwright';

const shots = [
  { url: 'https://pmenezesdev.github.io/suplog/', out: 'src/assets/projects/suplog.png' },
  { url: 'https://pmenezesdev.github.io/cumbuca-soparia/', out: 'src/assets/projects/cumbuca.png' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });

for (const shot of shots) {
  await page.goto(shot.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: shot.out });
  console.log(`${shot.out} capturado`);
}

await browser.close();
