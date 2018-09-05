"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ScrollToSectionDirective = class ScrollToSectionDirective {
    constructor() { }
    click() { this.onClick(); }
    touch() { this.onClick(); }
    onClick() {
        let x = document.querySelector(this.targetSection);
        if (x) {
            try {
                x.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            catch (e) {
                x.scrollIntoView();
            }
        }
    }
};
__decorate([
    core_1.Input()
], ScrollToSectionDirective.prototype, "targetSection", void 0);
__decorate([
    core_1.HostListener('click', ['$event'])
], ScrollToSectionDirective.prototype, "click", null);
__decorate([
    core_1.HostListener('touch', ['$event'])
], ScrollToSectionDirective.prototype, "touch", null);
ScrollToSectionDirective = __decorate([
    core_1.Directive({
        selector: '[appScrollToSection]'
    })
], ScrollToSectionDirective);
exports.ScrollToSectionDirective = ScrollToSectionDirective;
//# sourceMappingURL=scroll-to-section.directive.js.map