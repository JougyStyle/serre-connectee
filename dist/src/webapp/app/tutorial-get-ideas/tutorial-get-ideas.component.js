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
let TutorialGetIdeasComponent = class TutorialGetIdeasComponent {
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
            .then(() => this.animation.animatePopInElement(this.firstCard))
            .then(() => this.animation.animateFadeInElement(this.messageIdeas))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.animateFadeInElement(this.messageSwipeRight))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.moveElementToPoint(this.cardsAndFinger, '250px, 0px, 0px', { duration: 300 }))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.moveElementToPoint(this.cardsAndFinger, '0px, 0px, 0px', { duration: 300 }))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.animateFadeInElement(this.messageSwipeLeft))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.moveElementToElement(this.finger, this.dislikeButton, { duration: 300 }))
            .then(() => this.animation.pause(300))
            .then(() => this.animation.animateClickOnElement(this.dislikeButton, 300))
            .then(() => this.animation.moveElementToPoint(this.firstCard, '-250px, 0px, 0px', { duration: 300 }))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.moveElementToPoint(this.firstCard, '0px, 0px, 0px', { duration: 300 }))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.animateFadeInElement(this.messageConclusion))
            .then(() => this.animation.pause(2000))
            .then(() => this.animation.animateFadeOutElement(this.messageIdeas))
            .then(() => this.animation.animateFadeOutElement(this.messageSwipeRight))
            .then(() => this.animation.animateFadeOutElement(this.messageSwipeLeft))
            .then(() => this.animation.animateFadeOutElement(this.messageConclusion))
            .then(() => this.animation.moveElementToElement(this.finger, this.finger, { duration: 300 }));
        // .then( () => this.animationEnd.emit() );
    }
};
__decorate([
    core_1.ViewChild('firstCard')
], TutorialGetIdeasComponent.prototype, "firstCard", void 0);
__decorate([
    core_1.ViewChild('messageIdeas')
], TutorialGetIdeasComponent.prototype, "messageIdeas", void 0);
__decorate([
    core_1.ViewChild('messageSwipeRight')
], TutorialGetIdeasComponent.prototype, "messageSwipeRight", void 0);
__decorate([
    core_1.ViewChild('messageSwipeLeft')
], TutorialGetIdeasComponent.prototype, "messageSwipeLeft", void 0);
__decorate([
    core_1.ViewChild('messageConclusion')
], TutorialGetIdeasComponent.prototype, "messageConclusion", void 0);
__decorate([
    core_1.ViewChild('dislikeButton')
], TutorialGetIdeasComponent.prototype, "dislikeButton", void 0);
__decorate([
    core_1.ViewChild('likeButton')
], TutorialGetIdeasComponent.prototype, "likeButton", void 0);
__decorate([
    core_1.ViewChild('finger')
], TutorialGetIdeasComponent.prototype, "finger", void 0);
__decorate([
    core_1.ViewChild('cardsAndFinger')
], TutorialGetIdeasComponent.prototype, "cardsAndFinger", void 0);
__decorate([
    core_1.Output()
], TutorialGetIdeasComponent.prototype, "animationEnd", void 0);
TutorialGetIdeasComponent = __decorate([
    core_1.Component({
        selector: 'app-tutorial-get-ideas',
        templateUrl: './tutorial-get-ideas.component.html',
        styleUrls: ['./tutorial-get-ideas.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], TutorialGetIdeasComponent);
exports.TutorialGetIdeasComponent = TutorialGetIdeasComponent;
//# sourceMappingURL=tutorial-get-ideas.component.js.map