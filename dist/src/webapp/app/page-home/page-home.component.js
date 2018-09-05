"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PageHomeComponent = class PageHomeComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.stuffAvailableValues = ['des trucs', 'un resto pour ce soir', 'un bar où refaire le monde', 'un spectacle de ouf', 'un film à regarder ce soir', 'la série du moment'];
        this.peopleAvailableValues = ['des gens', 'sa belle-mère', 'ses potes de lycée', 'des collègues un peu coincés'];
    }
};
PageHomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './page-home.component.html',
        styleUrls: ['./page-home.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], PageHomeComponent);
exports.PageHomeComponent = PageHomeComponent;
//# sourceMappingURL=page-home.component.js.map