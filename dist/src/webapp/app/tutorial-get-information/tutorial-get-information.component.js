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
let TutorialGetInformationComponent = class TutorialGetInformationComponent {
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
        return this.animation.pause(1000)
            .then(() => this.animation.animateClickOnElement(this.firstCard, 300))
            .then(() => this.animation.pause(200))
            .then(() => this.animation.moveElementToPoint(this.elementDetails, '0px, -110%, 0px', { duration: 300 }))
            .then(() => this.animation.pause(2000))
            .then(() => this.animation.moveElementToPoint(this.elementDetails, '0px, 0px, 0px', { duration: 300 }))
            .then(() => this.animation.pause(1000));
        // .then( () => this.animationEnd.emit() );
    }
};
__decorate([
    core_1.ViewChild('firstCard')
], TutorialGetInformationComponent.prototype, "firstCard", void 0);
__decorate([
    core_1.ViewChild('elementDetails')
], TutorialGetInformationComponent.prototype, "elementDetails", void 0);
__decorate([
    core_1.ViewChild('finger')
], TutorialGetInformationComponent.prototype, "finger", void 0);
__decorate([
    core_1.ViewChild('cardsAndFinger')
], TutorialGetInformationComponent.prototype, "cardsAndFinger", void 0);
__decorate([
    core_1.Output()
], TutorialGetInformationComponent.prototype, "animationEnd", void 0);
TutorialGetInformationComponent = __decorate([
    core_1.Component({
        selector: 'app-tutorial-get-information',
        templateUrl: './tutorial-get-information.component.html',
        styleUrls: ['./tutorial-get-information.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], TutorialGetInformationComponent);
exports.TutorialGetInformationComponent = TutorialGetInformationComponent;
//# sourceMappingURL=tutorial-get-information.component.js.map