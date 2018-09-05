"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_server_1 = require("@angular/platform-server");
const module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
const app_module_1 = require("./app.module");
const app_component_1 = require("./app.component");
let AppServerModule = class AppServerModule {
};
AppServerModule = __decorate([
    core_1.NgModule({
        imports: [
            app_module_1.AppModule,
            platform_server_1.ServerModule,
            module_map_ngfactory_loader_1.ModuleMapLoaderModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
    })
], AppServerModule);
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app.server.module.js.map