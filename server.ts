import { APP_BASE_HREF } from '@angular/common';
import fs from 'node:fs';
import { renderApplication } from '@angular/platform-server';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '**',
    express.static(browserDistFolder, {
      maxAge: '1y',
      index: 'index.html',
    })
  );

  // All regular routes use the Angular SSR renderApplication
  server.get('**', async (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    try {
      const document = fs.readFileSync(indexHtml, 'utf-8');
      const html = await renderApplication(bootstrap, {
        document,
        url: `${protocol}://${headers.host}${originalUrl}`,
        platformProviders: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      });
      res.send(html);
    } catch (err) {
      next(err);
    }
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] ?? 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
