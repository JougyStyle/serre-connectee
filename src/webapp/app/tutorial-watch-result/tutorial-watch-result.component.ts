import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-tutorial-watch-result',
  templateUrl: './tutorial-watch-result.component.html',
  styleUrls: ['./tutorial-watch-result.component.scss']
})
export class TutorialWatchResultComponent implements OnInit {
  @ViewChild('first') first: ElementRef;
  @ViewChild('second') second: ElementRef;
  @ViewChild('third') third: ElementRef;
  @ViewChild('fourth') fourth: ElementRef;
  @ViewChild('finger') finger: ElementRef;
  @Output() animationEnd = new EventEmitter<string>(true);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private animation: AnimationService,
  ) { }

  ngOnInit() {
    /**
     * window n'est accessible qu'en mode browser, pas en mode SSR : on check la plateforme et on n'execute les animations 
     * (ou plus globalement les fonctions de Window) que dans le navigateur
     */
    if (isPlatformBrowser(this.platformId)) {
      this.runAnimation();
    }
  }

  runAnimation() {
    let grey = getComputedStyle(document.body).getPropertyValue('--bdz-background-alt2-color');
    let red = getComputedStyle(document.body).getPropertyValue('--bdz-warning-light-color');
    let green = getComputedStyle(document.body).getPropertyValue('--bdz-primary-light-color');
    return this.animation.pause(1000)
      .then( () => this.animation.animateFadeInElement(this.first) )
      .then( () => this.animation.animateFadeInElement(this.second) )
      .then( () => this.animation.animateFadeInElement(this.third) )
      .then( () => this.animation.animateFadeInElement(this.fourth) )
      .then( () => this.animation.pause(500) )
      .then( () => Promise.all([
        this.animation.changeBackgroundColor(this.second, grey, red, 200).then( () => this.animation.changeBackgroundColor(this.second, red, grey, 200) ),
        this.animation.changeBackgroundColor(this.third, grey, green, 200).then( () => this.animation.changeBackgroundColor(this.third, green, grey, 200) )
      ]))
      .then( () => Promise.all([
        this.animation.moveElementToElement(this.second, this.third, { duration: 1000 }),
        this.animation.moveElementToElement(this.third, this.second, { duration: 1000 })
      ]))
      .then( () => Promise.all([
        this.animation.changeBackgroundColor(this.first, grey, red, 200).then( () => this.animation.changeBackgroundColor(this.first, red, grey, 200) ),
        this.animation.changeBackgroundColor(this.third, grey, green, 200).then( () => this.animation.changeBackgroundColor(this.third, green, grey, 200) )
      ]))
      .then( () => Promise.all([
        this.animation.moveElementToElement(this.first, this.third, { duration: 1000 }),
        this.animation.moveElementToElement(this.third, this.first, { duration: 1000 })
      ]))
      .then( () => Promise.all([
        this.animation.changeBackgroundColor(this.second, grey, red, 200).then( () => this.animation.changeBackgroundColor(this.second, red, grey, 200) ),
        this.animation.changeBackgroundColor(this.fourth, grey, green, 200).then( () => this.animation.changeBackgroundColor(this.fourth, green, grey, 200) )
      ]))
      .then( () => Promise.all([
        this.animation.moveElementToElement(this.second, this.fourth, { duration: 1000 }),
        this.animation.moveElementToElement(this.fourth, this.second, { duration: 1000 })
      ]))
      // .then( () => this.animationEnd.emit() );
  }
}
