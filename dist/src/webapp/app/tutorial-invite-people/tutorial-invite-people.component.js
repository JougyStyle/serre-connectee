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
let TutorialInvitePeopleComponent = class TutorialInvitePeopleComponent {
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
        return this.animation.pause(0)
            .then(() => this.animation.moveElementToElement(this.finger, this.smallShareButton, { duration: 500 }))
            .then(() => this.animation.animateClickOnElement(this.smallShareButton))
            .then(() => this.animation.pause(200))
            .then(() => this.animation.moveElementToPoint(this.shareSection, '0px, -150px, 0px'))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.moveElementToElement(this.finger, this.whatsapp, { duration: 500 }))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.animateClickOnElement(this.whatsapp))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.moveElementToPoint(this.shareSection, '0px, 0px, 0px'))
            .then(() => this.animation.pause(500))
            .then(() => this.animation.moveElementToElement(this.finger, this.finger, { duration: 500 }))
            .then(() => this.animation.pause(1000))
            .then(() => this.animation.animateFadeOutElement(this.finger))
            .then(() => this.animation.pause(1000));
        // .then( () => this.animationEnd.emit() );
    }
};
__decorate([
    core_1.ViewChild('smallShareButton')
], TutorialInvitePeopleComponent.prototype, "smallShareButton", void 0);
__decorate([
    core_1.ViewChild('shareSection')
], TutorialInvitePeopleComponent.prototype, "shareSection", void 0);
__decorate([
    core_1.ViewChild('finger')
], TutorialInvitePeopleComponent.prototype, "finger", void 0);
__decorate([
    core_1.ViewChild('whatsapp')
], TutorialInvitePeopleComponent.prototype, "whatsapp", void 0);
__decorate([
    core_1.Output()
], TutorialInvitePeopleComponent.prototype, "animationEnd", void 0);
TutorialInvitePeopleComponent = __decorate([
    core_1.Component({
        selector: 'app-tutorial-invite-people',
        templateUrl: './tutorial-invite-people.component.html',
        styleUrls: ['./tutorial-invite-people.component.scss'],
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], TutorialInvitePeopleComponent);
exports.TutorialInvitePeopleComponent = TutorialInvitePeopleComponent;
//# sourceMappingURL=tutorial-invite-people.component.js.map