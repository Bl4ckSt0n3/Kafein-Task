import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import 'localstorage-polyfill';
global['localStorage'] = localStorage;

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  var cors = require('cors');
  server.use(cors(
    {
      origin: 'http://localhost:4200'
    }
  ));
  const distFolder = join(process.cwd(), 'dist/KafeinTest/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);
  server.use(express.json());

  // Example Express Rest API endpoints
  const notes: any = [
    {id: 0, note: "this is test note", priority: 1}, 
    {id: 1, note: "second test note", priority: 1},
    {id: 2, note: "second test note", priority: 1},
    {id: 3, note: "second test note", priority: 1},
    {id: 4, note: "second test note", priority: 1},
    {id: 5, note: "second test note", priority: 1},
    {id: 6, note: "second test note", priority: 1},
    {id: 7, note: "second test note", priority: 1},
    {id: 8, note: "second test note", priority: 1}
  ];
  server.get('/api/**', async (req, res) => { 
    // var notes: any[] = [{"note": "this is a note"}];
    res.send(notes);  
  });
  server.post('/api/create/**', async (req, res) => {
    const T = {id: notes.length, note: req.body["noteText"], priority: req.body["priority"]};
    notes.push(T);
    console.log(notes);
    res.status(200).send(res);
  });
  server.post('/api/update/**', async (req, res) => {
    console.log(req.body);
    notes.forEach((item: any) => {
      if (item.id == req.body["id"]) {
        item.note = req.body["noteText"];
        item.priority = req.body["priority"];
      };
    })
    res.status(200).send({message: "success"});
  });
  server.post('/api/delete/**', async (req, res) => {
    console.log(req.body);
    notes.forEach((item: any) => {
      if (item.id == req.body["id"]) {
        notes.splice(notes.indexOf(item), 1);
      }
    })
    res.status(200).send({message: "success"});
  });
  server.post('/api/auth/**', async (req, res) => {
    console.log(req.body);
    if (req.body.username == "admin" && req.body.password == "12345") {
      var response = {
        data: {
          username: req.body["username"], 
          password: req.body["password"],
          message: "success"
      }}
      res.send(response);
    } else {
      res.status(400).send("failed");
    }
    
  });

  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { 
      req, 
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
        { provide: 'body', useValue: req.body},
        { provide: 'REQUEST', useValue: req },
        { provide: 'RESPONSE', useValue: res },
      ] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
