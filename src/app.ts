'use strict';

import * as cors from 'cors';
import * as express from 'express';
const app = express();
import http from 'http';
import * as SwaggerExpress from 'swagger-express-mw';
import * as swaggerUI from 'swagger-ui-express';

const port = process.env.PORT || 80;

// trigger
app.use(cors());

/**
 * Packages utilisés pour charger les fichiers yaml de configuration de swagger-express-mw
 * ==> http://thisdavej.com/getting-started-with-yaml-in-node-js-using-js-yaml/
 */
import * as fs from 'fs';
import * as yaml from 'js-yaml';

module.exports = app; // for testing

app.get('/ping', (req, res) => {
  const answer = { answer: true };
  res.status(200).json(answer);
});

console.log('__dirname');
console.log(__dirname);
const config: SwaggerExpress.Config = {
  // appRoot: __dirname, // required config
  appRoot: __dirname,
  configDir: 'config',
};

console.log('config');
console.log(config);
SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  app.listen(port);
  // On met en ligne la documentation de l'API
  try {
    const routesDeclared = yaml.safeLoad(fs.readFileSync(__dirname + '/api/swagger/swagger.yaml', 'utf8'));
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(routesDeclared));
  } catch (e) {
    console.log(e);
  }
});

function convertYamlSwaggerFileToJson(cb: (err: any, swaggerJson: any) => void) {
	cb(null, null);
}

export default app;
