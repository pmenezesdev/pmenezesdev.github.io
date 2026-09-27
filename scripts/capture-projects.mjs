// Captura as telas dos projetos em alta resolução (2x) para os cards do portfólio.
// Uso: npm run capture
import { chromium } from 'playwright';

const shots = [
  { url: 'https://pmenezesdev.github.io/suplog/', out: 'src/assets/projects/suplog.png' },
  { url: 'https://pmenezesdev.github.io/cumbuca-soparia/', out: 'src/assets/projects/cumbuca.png' },
];

const browser = await chromium.launch({
  args: ['--autoplay-policy=no-user-gesture-required'],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });

for (const shot of shots) {
  await page.goto(shot.url, { waitUntil: 'networkidle' });
  if (shot.out.endsWith('suplog.png')) {
    // O fundo é vídeo: o primeiro clipe é o porto, e o navio entra no segundo, cerca de 9s depois.
    await page.waitForFunction(
      () => {
        const video = document.querySelector('video.is-active');
        return (
          video instanceof HTMLVideoElement &&
          video.currentSrc.includes('hero-2.mp4') &&
          video.readyState >= 2 &&
          video.currentTime >= 3
        );
      },
      { timeout: 20000 },
    );
  } else {
    await page.waitForTimeout(1500);
  }
  await page.screenshot({ path: shot.out });
  console.log(`${shot.out} capturado`);
}

await browser.close();
