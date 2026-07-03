import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = path.resolve('public/assets');
const SOURCES = [
  'villa_plasa_house_sunset.jpg',
  'villa_kras_pool.jpg',
];

const VARIANTS = {
  mobile: { maxWidth: 828, quality: 78 },
  desktop: { maxWidth: 1920, quality: 82 },
};

for (const variant of Object.keys(VARIANTS)) {
  fs.mkdirSync(path.join(ROOT, variant), { recursive: true });
}

for (const file of SOURCES) {
  const input = path.join(ROOT, file);
  if (!fs.existsSync(input)) {
    console.warn(`Skip missing: ${input}`);
    continue;
  }

  const base = path.parse(file).name;

  for (const [variant, opts] of Object.entries(VARIANTS)) {
    const output = path.join(ROOT, variant, `${base}.webp`);
    await sharp(input)
      .rotate()
      .resize({ width: opts.maxWidth, withoutEnlargement: true })
      .webp({ quality: opts.quality, effort: 6 })
      .toFile(output);

    const meta = await sharp(output).metadata();
    const size = fs.statSync(output).size;
    console.log(`${variant}/${base}.webp — ${meta.width}x${meta.height}, ${(size / 1024).toFixed(0)} KB`);
  }

  fs.unlinkSync(input);
  console.log(`Deleted original: ${file}`);
}
