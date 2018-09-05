"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const page_home_component_1 = require("./page-home/page-home.component");
const page_prenom_component_1 = require("./page-prenom/page-prenom.component");
const page_streaming_component_1 = require("./page-streaming/page-streaming.component");
const page_sortie_component_1 = require("./page-sortie/page-sortie.component");
const routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: page_home_component_1.PageHomeComponent,
        data: {
            title: "Un outil pour se mettre d'accord",
            metatags: {
                description: "Vous devez vous mettre d'accord avec des amis ? Pour une sortie resto, un cadeau, un prénom ? Buddiz peut vous aider !",
                keywords: "moteur de recherche, outil collaboratif, trouver une idée, se mettre d'accord"
            }
        }
    }, {
        path: 'prenom',
        redirectTo: '/trouver-un-prenom',
        pathMatch: 'full'
    }, {
        path: 'trouver-un-prenom',
        component: page_prenom_component_1.PagePrenomComponent,
        data: {
            title: "Un prénom pour un bébé",
            metatags: {
                description: "Vous cherchez un prénom ? On peut vous aider...",
                keywords: "prénom, prénom garçon, prénom fille"
            }
        }
    }, {
        path: 'streaming',
        redirectTo: '/trouver-un-film-ou-serie-a-regarder',
        pathMatch: 'full'
    }, {
        path: 'trouver-un-film-ou-serie-a-regarder',
        component: page_streaming_component_1.PageStreamingComponent,
        data: {
            title: "Un film pour ce soir",
            metatags: {
                description: "Ce soir, c'est soirée canapée ? On peut vous aider pour le programme télé. Film ou série, sur Amazon Prime ou Netflix...",
                keywords: "Film, Série, Netflix, Amazon Prime"
            }
        }
    }, {
        path: 'sortie',
        redirectTo: '/trouver-un-endroit-ou-sortir',
        pathMatch: 'full'
    }, {
        path: 'trouver-un-endroit-ou-sortir',
        component: page_sortie_component_1.PageSortieComponent,
        data: {
            title: "Resto, spectacle...",
            metatags: {
                description: "Vous avez prévu de sortir au resto, et d'enchainer avec un spectacle ? Buddiz vous aide à définir le programme qui plaira à tout le monde !",
                keywords: "Resto, Restaurant, Théâtre, Concert, sortie entre amis"
            }
        }
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map