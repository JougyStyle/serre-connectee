import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  animateClickOnElement (elem: ElementRef, duration?: number) {
    return new Promise( (resolve, reject) => {
      let anim = elem.nativeElement.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.1)'},
        { transform: 'scale(1)' }
      ], { duration: duration || 300 });
      anim.onfinish = () => resolve();
    })
  }
  animatePopInElement (elem: ElementRef, duration?: number) {
    return new Promise( (resolve, reject) => {
      let anim = elem.nativeElement.animate([
        { transform: 'scale(0)' },
        { transform: 'scale(1)' },
      ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
      anim.onfinish = () => resolve();
    })
  }
  animatePopOutElement (elem: ElementRef, duration?: number) {
    return new Promise( (resolve, reject) => {
      let anim = elem.nativeElement.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(0)' },
      ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
      anim.onfinish = () => resolve();
    })
  }
  moveElementToElement (elem: ElementRef, targetElem, options?: {percentX?: number, percentY?: number, duration?: number}) {
    if (!options) { options = {}; }
    if (!options.percentX || typeof options.percentX !== 'number') { options.percentX = 0.5; }
    if (!options.percentY || typeof options.percentY !== 'number') { options.percentY = 0.5; }
    if (!options.duration || typeof options.duration !== 'number') { options.duration = 1000; }
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
    return new Promise( (resolve, reject) => {
      let anim = elem.nativeElement.animate([
        { transform: 'translate3d(' + this.xyzToPxPxPx(initialPosition) + ')' },
        { transform: 'translate3d(' + this.xyzToPxPxPx(targetPosition) + ')' }
      ], { duration: options.duration || 1000, easing: 'ease-in-out', fill: 'forwards' });
      anim.onfinish = () => resolve();
    })
  }
  moveElementToPoint (elem: ElementRef, targetPoint, options?) {
    if (!options || typeof options !== 'object') { options = {}; }
    if (!options.duration || typeof options.duration !== 'number') { options.duration = 1000; }
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
    return new Promise( (resolve, reject) => {
      let anim = elem.nativeElement.animate([
        { transform: 'translate3d(' + this.xyzToPxPxPx(initialPosition) + ')' },
        { transform: 'translate3d(' + targetPoint + ')' }
      ], { duration: options.duration, easing: 'ease-in-out', fill: 'forwards' });
      anim.onfinish = () => resolve();
    })
  }
  moveElementFromPointToPoint (elem: ElementRef, initialPoint, targetPoint, options?) {
    if (!options || typeof options !== 'object') { options = {}; }
    if (!options.duration || typeof options.duration !== 'number') { options.duration = 1000; }
    return new Promise( (resolve, reject) => {
      let anim = elem.nativeElement.animate([
        { transform: 'translate3d(' + initialPoint + ')' },
        { transform: 'translate3d(' + targetPoint + ')' }
      ], { duration: options.duration, easing: 'ease-in-out', fill: 'forwards' });
      anim.onfinish = () => resolve();
    })
  }
  animateFadeInElement (elem: ElementRef, duration?: number) {
    return new Promise( (resolve, reject) => {
      let anim = elem.nativeElement.animate([
        { opacity: 0 },
        { opacity: 1 },
      ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
      anim.onfinish = () => resolve();
    })
  }
  animateFadeOutElement (elem: ElementRef, duration?: number) {
    return new Promise( (resolve, reject) => {
      let anim = elem.nativeElement.animate([
        { opacity: 1 },
        { opacity: 0 },
      ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
      anim.onfinish = () => resolve();
    })
  }
  changeBackgroundColor (elem: ElementRef, fromColor, toColor, duration?: number) {
    return new Promise( (resolve, reject) => {
      let anim = elem.nativeElement.animate([
        { backgroundColor: fromColor },
        { backgroundColor: toColor },
      ], { duration: duration || 300, easing: 'ease-in-out', fill: 'forwards' });
      anim.onfinish = () => resolve();
    })
  }
  pause(duration) {
    return new Promise( (resolve, reject) => setTimeout( () => resolve(), duration ) );
  }

  getTranslate3d (el: ElementRef): number[] {
    var values = window.getComputedStyle(el.nativeElement, null).transform.split(/\w+\(|\);?/);
    if (!values[1] || !values[1].length) {
        return [];
    }
    return values[1].split(/,\s?/g).map((val) => Number(val)).slice(-2);
  }
  xyzToPxPxPx (coord) {
    return Math.floor(coord.x) + 'px, ' + Math.floor(coord.y) + 'px, ' + Math.floor(coord.z) + 'px';
  }
}
