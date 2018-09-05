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
const common_1 = require("@angular/common");
let TutorialGiveOpinionComponent = class TutorialGiveOpinionComponent {
    constructor(platformId, animation) {
        this.platformId = platformId;
        this.animation = animation;
        this.animationEnd = new core_1.EventEmitter(true);
    }
    ngOnInit() {
        /**
         * window n'est accessible qu'en mode browser, pas en mode SSR : on check la plateforme et on n'execute les animations
         * (ou plus globalement les fonctions de Window) que dans le navigateur
         */
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.runAnimation();
        }
    }
    runAnimation() {
        let grey = window.getComputedStyle(document.body).getPropertyValue('--bdz-background-alt2-color');
        let red = window.getComputedStyle(document.body).getPropertyValue('--bdz-warning-light-color');
        let green = window.getComputedStyle(document.body).getPropertyValue('--bdz-primary-light-color');
        return this.animation.pause(1000)
            .then(() => this.animation.animateFadeInElement(this.topMessage))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.animateFadeInElement(this.bottomMessage))
            .then(() => this.animation.pause(1000))
            .then(() => this.animation.moveElementToElement(this.finger, this.bottomCard, { duration: 500 }))
            .then(() => this.animation.animateClickOnElement(this.bottomCard))
            .then(() => Promise.all([
            this.animation.changeBackgroundColor(this.topCard, grey, red, 750).then(() => this.animation.changeBackgroundColor(this.topCard, red, grey, 750)),
            this.animation.changeBackgroundColor(this.bottomCard, grey, green, 750).then(() => this.animation.changeBackgroundColor(this.bottomCard, green, grey, 750))
        ]))
            .then(() => this.animation.moveElementToPoint(this.topCard, '100px, -200px, 0px', { duration: 750 }))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.moveElementToPoint(this.topCard, '0px, 0px, 0px', { duration: 750 }))
            .then(() => this.animation.pause(1000))
            .then(() => this.animation.moveElementToElement(this.finger, this.topCard, { duration: 750 }))
            .then(() => this.animation.animateClickOnElement(this.topCard))
            .then(() => Promise.all([
            this.animation.changeBackgroundColor(this.bottomCard, grey, red, 750).then(() => this.animation.changeBackgroundColor(this.bottomCard, red, grey, 750)),
            this.animation.changeBackgroundColor(this.topCard, grey, green, 750).then(() => this.animation.changeBackgroundColor(this.topCard, green, grey, 750))
        ]))
            .then(() => this.animation.moveElementToPoint(this.bottomCard, '100px, 200px, 0px', { duration: 750 }))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.moveElementToPoint(this.bottomCard, '0px, 0px, 0px', { duration: 750 }))
            .then(() => this.animation.pause(500));
        // .then( () => this.animationEnd.emit() );
    }
};
__decorate([
    core_1.ViewChild('topCard')
], TutorialGiveOpinionComponent.prototype, "topCard", void 0);
__decorate([
    core_1.ViewChild('bottomCard')
], TutorialGiveOpinionComponent.prototype, "bottomCard", void 0);
__decorate([
    core_1.ViewChild('topMessage')
], TutorialGiveOpinionComponent.prototype, "topMessage", void 0);
__decorate([
    core_1.ViewChild('bottomMessage')
], TutorialGiveOpinionComponent.prototype, "bottomMessage", void 0);
__decorate([
    core_1.ViewChild('finger')
], TutorialGiveOpinionComponent.prototype, "finger", void 0);
__decorate([
    core_1.Output()
], TutorialGiveOpinionComponent.prototype, "animationEnd", void 0);
TutorialGiveOpinionComponent = __decorate([
    core_1.Component({
        selector: 'app-tutorial-give-opinion',
        templateUrl: './tutorial-give-opinion.component.html',
        styleUrls: ['./tutorial-give-opinion.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], TutorialGiveOpinionComponent);
exports.TutorialGiveOpinionComponent = TutorialGiveOpinionComponent;
//# sourceMappingURL=tutorial-give-opinion.component.js.map