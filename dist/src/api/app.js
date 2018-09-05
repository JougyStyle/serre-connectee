'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  paramètrage et import pour API
 */
const cors = require("cors"); // Middleware pour autoriser les appels d'API depuis l'extérieur
const express = require("express"); // Le framework de base
const fs = require("fs"); // Chargement de fichier (notamment fichiers de configuration de l'API et des routes) ==> http://thisdavej.com/getting-started-with-yaml-in-node-js-using-js-yaml/
const yaml = require("js-yaml"); // Conversion de fichier yaml ==> http://thisdavej.com/getting-started-with-yaml-in-node-js-using-js-yaml/
const SwaggerExpress = require("swagger-express-mw"); // Surcouche permettant de paramétrer l'API avec un fichier de description au format OpenAPI 2.0
const swaggerUI = require("swagger-ui-express"); // Génération automatique de la documentation de l'API avec exposition d'une page permettant de faire les appels
const port = process.env.PORT || 80;
const app = express();
app.use(cors());
// Première route de test (ping ? pong !)
app.get('/ping', (req, res) => { res.status(200).json({ answer: 'pong' }); });
/**
 *  Paramètrage et import pour application Angular avec SSR
 */
const core_1 = require("@angular/core");
const path_1 = require("path");
require("reflect-metadata");
require("zone.js/dist/zone-node");
core_1.enableProdMode(); // Faster server renders w/ Prod mode (dev mode never needed)
// Dossier racine de la webapp
const DIST_FOLDER = path_1.join(process.cwd(), 'dist/src/webapp');
// tslint:disable-next-line:no-var-requires
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/src/webapp/main'); // * NOTE :: leave this as require() since this file is built Dynamically from webpack
// Express Engine
const express_engine_1 = require("@nguniversal/express-engine");
// Import module map for lazy loading
const module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
// Paramètrage de express pour le rendu de vues
app.engine('html', express_engine_1.ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        module_map_ngfactory_loader_1.provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', path_1.join(DIST_FOLDER, 'browser'));
// Server static files from /browser
app.get('*.*', express.static(path_1.join(DIST_FOLDER, 'browser')));
// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req });
});
const config = { appRoot: __dirname, configDir: 'config' };
SwaggerExpress.create(config, (err, swaggerExpress) => {
    if (err) {
        throw err;
    }
    swaggerExpress.register(app); // Installation du middleware swagger dans le serveur express
    app.listen(port); // Lancement du serveur, qui écoute sur le port défini dans la variable éponyme
    // On met en ligne la documentation de l'API
    try {
        const apiDescription = yaml.safeLoad(fs.readFileSync(__dirname + '/api/swagger/swagger.yaml', 'utf8'));
        app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDescription));
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = app;
module.exports = app; // for testing
//# sourceMappingURL=app.js.map