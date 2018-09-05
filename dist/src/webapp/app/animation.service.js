"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AnimationService = class AnimationService {
    constructor() { }
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
    animatePopInElement(elem, duration) {
        return new Promise((resolve, reject) => {
            let anim = elem.nativeElement.animate([
                { transform: 'scale(0)' },
                { transform: 'scale(1)' },
            ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
            anim.onfinish = () => resolve();
        });
    }
    animatePopOutElement(elem, duration) {
        return new Promise((resolve, reject) => {
            let anim = elem.nativeElement.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(0)' },
            ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
            anim.onfinish = () => resolve();
        });
    }
    moveElementToElement(elem, targetElem, options) {
        if (!options) {
            options = {};
        }
        if (!options.percentX || typeof options.percentX !== 'number') {
            options.percentX = 0.5;
        }
        if (!options.percentY || typeof options.percentY !== 'number') {
            options.percentY = 0.5;
        }
        if (!options.duration || typeof options.duration !== 'number') {
            options.duration = 1000;
        }
        // On récupère chacune des valeurs pour pouvoir les modifier
        let initialElementPosition = {
            top: elem.nativeElement.getBoundingClientRect().top + elem.nativeElement.getBoundingClientRect().height / 2,
            bottom: elem.nativeElement.getBoundingClientRect().bottom,
            left: elem.nativeElement.getBoundingClientRect().left + elem.nativeElement.getBoundingClientRect().width / 2,
            right: elem.nativeElement.getBoundingClientRect().right,
            width: elem.nativeElement.getBoundingClientRect().width,
            height: elem.nativeElement.getBoundingClientRect().height,
        };
        let targetElementPosition = {
            top: targetElem.nativeElement.getBoundingClientRect().top,
            bottom: targetElem.nativeElement.getBoundingClientRect().bottom,
            left: targetElem.nativeElement.getBoundingClientRect().left,
            right: targetElem.nativeElement.getBoundingClientRect().right,
            width: targetElem.nativeElement.getBoundingClientRect().width,
            height: targetElem.nativeElement.getBoundingClientRect().height,
        };
        let initPos = this.getTranslate3d(elem);
        let initialPosition = {
            x: initPos[0] || 0,
            y: initPos[1] || 0,
            z: 0,
        };
        let targetPosition = {
            x: (targetElementPosition.left - initialElementPosition.left + initialPosition.x) + options.percentX * targetElementPosition.width,
            y: (targetElementPosition.top - initialElementPosition.top + initialPosition.y) + options.percentY * targetElementPosition.height,
            z: 0,
        };
        return new Promise((resolve, reject) => {
            let anim = elem.nativeElement.animate([
                { transform: 'translate3d(' + this.xyzToPxPxPx(initialPosition) + ')' },
                { transform: 'translate3d(' + this.xyzToPxPxPx(targetPosition) + ')' }
            ], { duration: options.duration || 1000, easing: 'ease-in-out', fill: 'forwards' });
            anim.onfinish = () => resolve();
        });
    }
    moveElementToPoint(elem, targetPoint, options) {
        if (!options || typeof options !== 'object') {
            options = {};
        }
        if (!options.duration || typeof options.duration !== 'number') {
            options.duration = 1000;
        }
        // On récupère chacune des valeurs pour pouvoir les modifier
        let initialElementPosition = {
            top: elem.nativeElement.getBoundingClientRect().top + elem.nativeElement.getBoundingClientRect().height / 2,
            bottom: elem.nativeElement.getBoundingClientRect().bottom,
            left: elem.nativeElement.getBoundingClientRect().left + elem.nativeElement.getBoundingClientRect().width / 2,
            right: elem.nativeElement.getBoundingClientRect().right,
            width: elem.nativeElement.getBoundingClientRect().width,
            height: elem.nativeElement.getBoundingClientRect().height,
        };
        let initPos = this.getTranslate3d(elem);
        let initialPosition = {
            x: initPos[0] || 0,
            y: initPos[1] || 0,
            z: 0,
        };
        return new Promise((resolve, reject) => {
            let anim = elem.nativeElement.animate([
                { transform: 'translate3d(' + this.xyzToPxPxPx(initialPosition) + ')' },
                { transform: 'translate3d(' + targetPoint + ')' }
            ], { duration: options.duration, easing: 'ease-in-out', fill: 'forwards' });
            anim.onfinish = () => resolve();
        });
    }
    moveElementFromPointToPoint(elem, initialPoint, targetPoint, options) {
        if (!options || typeof options !== 'object') {
            options = {};
        }
        if (!options.duration || typeof options.duration !== 'number') {
            options.duration = 1000;
        }
        return new Promise((resolve, reject) => {
            let anim = elem.nativeElement.animate([
                { transform: 'translate3d(' + initialPoint + ')' },
                { transform: 'translate3d(' + targetPoint + ')' }
            ], { duration: options.duration, easing: 'ease-in-out', fill: 'forwards' });
            anim.onfinish = () => resolve();
        });
    }
    animateFadeInElement(elem, duration) {
        return new Promise((resolve, reject) => {
            let anim = elem.nativeElement.animate([
                { opacity: 0 },
                { opacity: 1 },
            ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
            anim.onfinish = () => resolve();
        });
    }
    animateFadeOutElement(elem, duration) {
        return new Promise((resolve, reject) => {
            let anim = elem.nativeElement.animate([
                { opacity: 1 },
                { opacity: 0 },
            ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
            anim.onfinish = () => resolve();
        });
    }
    changeBackgroundColor(elem, fromColor, toColor, duration) {
        return new Promise((resolve, reject) => {
            let anim = elem.nativeElement.animate([
                { backgroundColor: fromColor },
                { backgroundColor: toColor },
            ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
            anim.onfinish = () => resolve();
        });
    }
    pause(duration) {
        return new Promise((resolve, reject) => setTimeout(() => resolve(), duration));
    }
    getTranslate3d(el) {
        var values = window.getComputedStyle(el.nativeElement, null).transform.split(/\w+\(|\);?/);
        if (!values[1] || !values[1].length) {
            return [];
        }
        return values[1].split(/,\s?/g).map((val) => Number(val)).slice(-2);
    }
    xyzToPxPxPx(coord) {
        return Math.floor(coord.x) + 'px, ' + Math.floor(coord.y) + 'px, ' + Math.floor(coord.z) + 'px';
    }
};
AnimationService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], AnimationService);
exports.AnimationService = AnimationService;
//# sourceMappingURL=animation.service.js.map