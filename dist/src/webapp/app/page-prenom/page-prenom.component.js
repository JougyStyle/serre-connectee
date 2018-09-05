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
let PagePrenomComponent = class PagePrenomComponent {
    constructor(platformId, events) {
        this.platformId = platformId;
        this.events = events;
        this.availableValues = [
            'Marius',
            'Paulo',
            'Abdul',
            'Jean-Baptiste',
            'Sophie',
            'Cléo',
            'Emma',
            'Colette',
        ];
        this.sample = {
            _id: '5a8d82b3254c4120ad79f829',
            providerElementId: '5a8d82b3254c4120ad79f829',
            providerName: 'buddiz',
            params: {
                sexe: 'F',
                categories: [
                    'medievaux',
                    'anglophones'
                ],
                name: 'EMMA',
                useCase: [
                    'firstName'
                ]
            }
        };
        this.openSample = false;
        this.iframeUrl = 'https://app.buddiz.io/%23/element-iframe/5a8d82b3254c4120ad79f829';
        this.events.emit('loadIframeUrl', { url: this.iframeUrl });
    }
    openSampleElement() {
        this.events.emit('showIframe', { url: this.iframeUrl });
    }
    dismiss() {
        this.events.emit('hideIframe', { url: this.iframeUrl });
    }
};
PagePrenomComponent = __decorate([
    core_1.Component({
        selector: 'app-page-prenom',
        templateUrl: './page-prenom.component.html',
        styleUrls: ['./page-prenom.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], PagePrenomComponent);
exports.PagePrenomComponent = PagePrenomComponent;
//# sourceMappingURL=page-prenom.component.js.map