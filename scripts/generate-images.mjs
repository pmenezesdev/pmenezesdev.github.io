// Gera a capa do projeto "Em breve", a imagem de compartilhamento (Open Graph) e o apple-touch-icon.
// Uso: npm run images
import sharp from 'sharp';

const mono = "Consolas, 'JetBrains Mono', monospace";
const sans = "'Segoe UI', 'Open Sans', Arial, sans-serif";

const background = (w, h) => `
  <defs>
    <radialGradient id="glow" cx="75%" cy="20%" r="70%">
      <stop offset="0" stop-color="#2a2a2a"/>
      <stop offset="1" stop-color="#0d0d0d"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.04"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  <circle cx="${w * 0.85}" cy="${h * 0.1}" r="${h * 0.45}" fill="none" stroke="#fff" stroke-opacity="0.08"/>
  <circle cx="${w * 0.1}" cy="${h * 0.95}" r="${h * 0.3}" fill="none" stroke="#fff" stroke-opacity="0.06"/>`;

function comingSoonCover() {
  const w = 1280;
  const h = 800;
  const lines = [
    ['const', ' projeto = ', 'await', ' build({'],
    ['  ', 'status: ', "'em desenvolvimento'", ','],
    ['  ', 'lançamento: ', "'em breve'", ','],
    ['  ', 'stack: ', "['TypeScript', 'Node.js', 'PostgreSQL']", ','],
    ['', '});', '', ''],
  ];
  const code = lines
    .map(([a, b, c, d], i) => {
      const y = 330 + i * 52;
      return `<text x="170" y="${y}" font-family="${mono}" font-size="30" xml:space="preserve"><tspan fill="#c792ea">${a}</tspan><tspan fill="#e6e6e6">${b}</tspan><tspan fill="#c3e88d">${c}</tspan><tspan fill="#e6e6e6">${d}</tspan></text>`;
    })
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${background(w, h)}
    <rect x="120" y="170" width="1040" height="460" rx="28" fill="#141414" stroke="#333"/>
    <circle cx="165" cy="215" r="9" fill="#ff5f57"/>
    <circle cx="195" cy="215" r="9" fill="#febc2e"/>
    <circle cx="225" cy="215" r="9" fill="#28c840"/>
    <text x="640" y="222" text-anchor="middle" font-family="${mono}" font-size="18" fill="#777">novo-projeto.ts</text>
    ${code}
    <rect x="170" y="590" width="16" height="30" fill="#fff" opacity="0.8"/>
  </svg>`;
}

async function ogImage() {
  const w = 1200;
  const h = 630;
  const photoSize = 380;
  const photo = await sharp('src/assets/pedro.jpg')
    .resize(photoSize, photoSize)
    .grayscale()
    .composite([
      {
        input: Buffer.from(
          `<svg width="${photoSize}" height="${photoSize}"><rect width="${photoSize}" height="${photoSize}" rx="32" fill="#fff"/></svg>`,
        ),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${background(w, h)}
    <text x="80" y="120" font-family="${mono}" font-size="22" fill="#9a9a9a">.../pedro-menezes...</text>
    <text x="80" y="235" font-family="${mono}" font-size="76" font-weight="700" fill="#fff">Full-stack</text>
    <text x="80" y="325" font-family="${mono}" font-size="76" font-weight="700" fill="#fff">Developer</text>
    <text x="80" y="400" font-family="${sans}" font-size="28" fill="#cfcfcf">Landing pages, sites e sistemas web</text>
    <text x="80" y="440" font-family="${sans}" font-size="28" fill="#cfcfcf">para empresas de todo o Brasil.</text>
    <rect x="80" y="490" width="310" height="58" rx="29" fill="#fff"/>
    <text x="235" y="527" text-anchor="middle" font-family="${mono}" font-size="22" font-weight="700" fill="#0d0d0d">Pedro Menezes</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .composite([{ input: photo, left: w - photoSize - 80, top: (h - photoSize) / 2 }])
    .png()
    .toFile('public/og.png');
}

// density 144 = 2x, para a capa ficar nítida em telas de alta densidade.
await sharp(Buffer.from(comingSoonCover()), { density: 144 }).png().toFile('src/assets/projects/em-breve.png');
await ogImage();
await sharp('public/favicon.svg', { density: 400 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Imagens geradas.');
