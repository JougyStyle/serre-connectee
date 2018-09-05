import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-tutorial-give-opinion',
  templateUrl: './tutorial-give-opinion.component.html',
  styleUrls: ['./tutorial-give-opinion.component.scss']
})
export class TutorialGiveOpinionComponent implements OnInit {
  @ViewChild('topCard') topCard: ElementRef;
  @ViewChild('bottomCard') bottomCard: ElementRef;
  @ViewChild('topMessage') topMessage: ElementRef;
  @ViewChild('bottomMessage') bottomMessage: ElementRef;
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
    let grey = window.getComputedStyle(document.body).getPropertyValue('--bdz-background-alt2-color');
    let red = window.getComputedStyle(document.body).getPropertyValue('--bdz-warning-light-color');
    let green = window.getComputedStyle(document.body).getPropertyValue('--bdz-primary-light-color');
    return this.animation.pause(1000)
      .then( () => this.animation.animateFadeInElement(this.topMessage) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.animateFadeInElement(this.bottomMessage) )
      .then( () => this.animation.pause(1000) )
      .then( () => this.animation.moveElementToElement(this.finger, this.bottomCard, { duration: 500 } ) )
      .then( () => this.animation.animateClickOnElement(this.bottomCard) )
      .then( () => Promise.all([
        this.animation.changeBackgroundColor(this.topCard, grey, red, 750).then( () => this.animation.changeBackgroundColor(this.topCard, red, grey, 750) ),
        this.animation.changeBackgroundColor(this.bottomCard, grey, green, 750).then( () => this.animation.changeBackgroundColor(this.bottomCard, green, grey, 750) )
      ]))
      .then( () => this.animation.moveElementToPoint(this.topCard, '100px, -200px, 0px', { duration: 750 }) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.moveElementToPoint(this.topCard, '0px, 0px, 0px', { duration: 750 } ) )
      .then( () => this.animation.pause(1000) )
      .then( () => this.animation.moveElementToElement(this.finger, this.topCard, { duration: 750 } ) )
      .then( () => this.animation.animateClickOnElement(this.topCard) )
      .then( () => Promise.all([
        this.animation.changeBackgroundColor(this.bottomCard, grey, red, 750).then( () => this.animation.changeBackgroundColor(this.bottomCard, red, grey, 750) ),
        this.animation.changeBackgroundColor(this.topCard, grey, green, 750).then( () => this.animation.changeBackgroundColor(this.topCard, green, grey, 750) )
      ]))
      .then( () => this.animation.moveElementToPoint(this.bottomCard, '100px, 200px, 0px', { duration: 750 }) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.moveElementToPoint(this.bottomCard, '0px, 0px, 0px', { duration: 750 } ) )
      // .then( () => this.animation.moveElementToPoint(this.finger, '0px, 0px, 0px', { duration: 300 } ) )
      .then( () => this.animation.pause(500) )
      // .then( () => this.animationEnd.emit() );
  }
}
