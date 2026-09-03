import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'dist', 'client');

for (const route of ['research', 'cv']) {
  const routeDir = join(outputDir, route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(join(outputDir, `${route}.html`), join(routeDir, 'index.html'));
}

await writeFile(
  join(outputDir, 'robots.txt'),
  'User-Agent: *\nAllow: /\n\nSitemap: https://forestknowswhy.github.io/sitemap.xml\n',
);

await writeFile(
  join(outputDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://forestknowswhy.github.io/</loc></url>
  <url><loc>https://forestknowswhy.github.io/research/</loc></url>
  <url><loc>https://forestknowswhy.github.io/cv/</loc></url>
</urlset>
`,
);
