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
let PageStreamingComponent = class PageStreamingComponent {
    constructor(platformId, events) {
        this.platformId = platformId;
        this.events = events;
        this.sample = {
            _id: '5ab3bcc641cef46927f9d828',
            providerElementId: '5ab3bcc641cef46927f9d828',
            providerName: 'buddiz',
            params: {
                name: "Casse-tête chinois",
                useCase: ["vstreaming"],
                provider: ["netflix"],
                objectType: "movie",
                originalName: "Casse-Tête Chinois",
                categories: ["comedy", "drama", "romance"],
                releaseYear: 2013,
                duration: 117
            }
        };
        this.openSample = false;
        this.iframeUrl = 'https://app.buddiz.io/%23/element-iframe/5ab3bcc641cef46927f9d828';
        this.events.emit('loadIframeUrl', { url: this.iframeUrl });
    }
    openSampleElement() {
        this.events.emit('loadIframeUrl', { url: this.iframeUrl });
        this.events.emit('showIframe', { url: this.iframeUrl });
    }
    dismiss() {
        this.events.emit('hideIframe', { url: this.iframeUrl });
    }
};
PageStreamingComponent = __decorate([
    core_1.Component({
        selector: 'app-page-streaming',
        templateUrl: './page-streaming.component.html',
        styleUrls: ['./page-streaming.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], PageStreamingComponent);
exports.PageStreamingComponent = PageStreamingComponent;
//# sourceMappingURL=page-streaming.component.js.map