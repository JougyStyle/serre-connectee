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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const operators_1 = require("rxjs/operators");
let AppComponent = class AppComponent {
    constructor(platformId, seoService, router, locStrat, events) {
        this.platformId = platformId;
        this.seoService = seoService;
        this.router = router;
        this.locStrat = locStrat;
        this.events = events;
        this.title = 'Buddiz';
        this.isPopState = false;
        this.pageLoaded = false;
        this.showIframe = false;
        this.iframeUrl = 'https://app.buddiz.io/%23/element-iframe/5a8d82b3254c4120ad79f829';
        seoService.addSeoData();
        if (common_1.isPlatformBrowser(this.platformId)) {
            window.addEventListener("load", function (event) {
                this.detectUserActivity()
                    .then(() => console.log('user activity'))
                    .then(() => this.pageLoaded = true);
            }.bind(this));
        }
        this.events.messageObs.pipe(operators_1.filter((message) => ['loadIframeUrl', 'showIframe', 'hideIframe'].indexOf(message.channel) > -1), operators_1.tap((message) => {
            if (message.channel === 'loadIframeUrl' && typeof message.payload === 'object' && typeof message.payload.url === 'string') {
                this.iframeUrl = message.payload.url;
            }
            if (message.channel === 'showIframe') {
                this.showIframe = true;
            }
            if (message.channel === 'hideIframe') {
                this.showIframe = false;
            }
        })).subscribe((message) => console.error(message));
    }
    ngOnInit() {
        this.goTopIfRequired();
    }
    detectUserActivity() {
        return new Promise((resolve, reject) => {
            // DOM Events
            document.onmousemove = resolve;
            document.onkeypress = resolve;
            document.onmousedown = resolve; // touchscreen presses
            document.ontouchstart = resolve;
            document.onclick = resolve; // touchpad clicks
            document.onscroll = resolve; // scrolling with arrow keys
        });
    }
    dismiss() {
        this.showIframe = false;
    }
    /**
     * Cette fonction sert à remonter la page en haut dans le cas d'un changement de page au niveau du router.
     * cf : https://stackoverflow.com/a/49233351
     */
    goTopIfRequired() {
        this.locStrat.onPopState(() => {
            this.isPopState = true;
        });
        this.router.events.subscribe(event => {
            // Scroll to top if accessing a page, not via browser history stack
            if (event instanceof router_1.NavigationEnd && !this.isPopState) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'auto' // available value : smooth, instant, or auto
                });
                this.isPopState = false;
            }
            // Ensures that isPopState is reset
            if (event instanceof router_1.NavigationEnd) {
                this.isPopState = false;
            }
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map