import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'dist', 'client');

for (const route of ['research', 'cv']) {
  const routeDir = join(outputDir, route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(join(outputDir, `${route}.html`), join(routeDir, 'index.html'));
}
