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
let TutorialWatchResultComponent = class TutorialWatchResultComponent {
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
        let grey = getComputedStyle(document.body).getPropertyValue('--bdz-background-alt2-color');
        let red = getComputedStyle(document.body).getPropertyValue('--bdz-warning-light-color');
        let green = getComputedStyle(document.body).getPropertyValue('--bdz-primary-light-color');
        return this.animation.pause(1000)
            .then(() => this.animation.animateFadeInElement(this.first))
            .then(() => this.animation.animateFadeInElement(this.second))
            .then(() => this.animation.animateFadeInElement(this.third))
            .then(() => this.animation.animateFadeInElement(this.fourth))
            .then(() => this.animation.pause(500))
            .then(() => Promise.all([
            this.animation.changeBackgroundColor(this.second, grey, red, 200).then(() => this.animation.changeBackgroundColor(this.second, red, grey, 200)),
            this.animation.changeBackgroundColor(this.third, grey, green, 200).then(() => this.animation.changeBackgroundColor(this.third, green, grey, 200))
        ]))
            .then(() => Promise.all([
            this.animation.moveElementToElement(this.second, this.third, { duration: 1000 }),
            this.animation.moveElementToElement(this.third, this.second, { duration: 1000 })
        ]))
            .then(() => Promise.all([
            this.animation.changeBackgroundColor(this.first, grey, red, 200).then(() => this.animation.changeBackgroundColor(this.first, red, grey, 200)),
            this.animation.changeBackgroundColor(this.third, grey, green, 200).then(() => this.animation.changeBackgroundColor(this.third, green, grey, 200))
        ]))
            .then(() => Promise.all([
            this.animation.moveElementToElement(this.first, this.third, { duration: 1000 }),
            this.animation.moveElementToElement(this.third, this.first, { duration: 1000 })
        ]))
            .then(() => Promise.all([
            this.animation.changeBackgroundColor(this.second, grey, red, 200).then(() => this.animation.changeBackgroundColor(this.second, red, grey, 200)),
            this.animation.changeBackgroundColor(this.fourth, grey, green, 200).then(() => this.animation.changeBackgroundColor(this.fourth, green, grey, 200))
        ]))
            .then(() => Promise.all([
            this.animation.moveElementToElement(this.second, this.fourth, { duration: 1000 }),
            this.animation.moveElementToElement(this.fourth, this.second, { duration: 1000 })
        ]));
        // .then( () => this.animationEnd.emit() );
    }
};
__decorate([
    core_1.ViewChild('first')
], TutorialWatchResultComponent.prototype, "first", void 0);
__decorate([
    core_1.ViewChild('second')
], TutorialWatchResultComponent.prototype, "second", void 0);
__decorate([
    core_1.ViewChild('third')
], TutorialWatchResultComponent.prototype, "third", void 0);
__decorate([
    core_1.ViewChild('fourth')
], TutorialWatchResultComponent.prototype, "fourth", void 0);
__decorate([
    core_1.ViewChild('finger')
], TutorialWatchResultComponent.prototype, "finger", void 0);
__decorate([
    core_1.Output()
], TutorialWatchResultComponent.prototype, "animationEnd", void 0);
TutorialWatchResultComponent = __decorate([
    core_1.Component({
        selector: 'app-tutorial-watch-result',
        templateUrl: './tutorial-watch-result.component.html',
        styleUrls: ['./tutorial-watch-result.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], TutorialWatchResultComponent);
exports.TutorialWatchResultComponent = TutorialWatchResultComponent;
//# sourceMappingURL=tutorial-watch-result.component.js.map