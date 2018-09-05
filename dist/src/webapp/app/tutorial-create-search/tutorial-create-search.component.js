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
let TutorialCreateSearchComponent = class TutorialCreateSearchComponent {
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
        return this.animation.pause(100)
            .then(() => Promise.all([
            this.animation.animateClickOnElement(this.bigButton, 300),
            this.animation.animateClickOnElement(this.smallButton, 300),
        ]))
            .then(() => Promise.all([
            this.animation.animateClickOnElement(this.bigButton, 300),
            this.animation.animateClickOnElement(this.smallButton, 300),
        ]))
            .then(() => this.animation.pause(2000));
        // .then( () => this.animationEnd.emit() );
    }
    animateClickOnElement(elem, duration) {
        return new Promise((resolve, reject) => {
            let anim = elem.nativeElement.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(1.1)' },
                { transform: 'scale(1)' }
            ], { duration: duration || 300 });
            anim.onfinish = () => resolve();
        });
    }
    pause(duration) {
        return new Promise((resolve, reject) => setTimeout(() => resolve(), duration));
    }
};
__decorate([
    core_1.ViewChild('bigButton')
], TutorialCreateSearchComponent.prototype, "bigButton", void 0);
__decorate([
    core_1.ViewChild('smallButton')
], TutorialCreateSearchComponent.prototype, "smallButton", void 0);
__decorate([
    core_1.Output()
], TutorialCreateSearchComponent.prototype, "animationEnd", void 0);
TutorialCreateSearchComponent = __decorate([
    core_1.Component({
        selector: 'app-tutorial-create-search',
        templateUrl: './tutorial-create-search.component.html',
        styleUrls: ['./tutorial-create-search.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], TutorialCreateSearchComponent);
exports.TutorialCreateSearchComponent = TutorialCreateSearchComponent;
//# sourceMappingURL=tutorial-create-search.component.js.map