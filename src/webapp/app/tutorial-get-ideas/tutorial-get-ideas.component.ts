import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-tutorial-get-ideas',
  templateUrl: './tutorial-get-ideas.component.html',
  styleUrls: ['./tutorial-get-ideas.component.scss']
})
export class TutorialGetIdeasComponent implements OnInit {
  @ViewChild('firstCard') firstCard: ElementRef;
  @ViewChild('messageIdeas') messageIdeas: ElementRef;
  @ViewChild('messageSwipeRight') messageSwipeRight: ElementRef;
  @ViewChild('messageSwipeLeft') messageSwipeLeft: ElementRef;
  @ViewChild('messageConclusion') messageConclusion: ElementRef;
  @ViewChild('dislikeButton') dislikeButton: ElementRef;
  @ViewChild('likeButton') likeButton: ElementRef;
  @ViewChild('finger') finger: ElementRef;
  @ViewChild('cardsAndFinger') cardsAndFinger: ElementRef;
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
    return this.animation.pause(1000)
      .then( () => this.animation.animatePopInElement(this.firstCard) )
      .then( () => this.animation.animateFadeInElement(this.messageIdeas) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.animateFadeInElement(this.messageSwipeRight) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.moveElementToPoint(this.cardsAndFinger, '250px, 0px, 0px', { duration: 300 } ) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.moveElementToPoint(this.cardsAndFinger, '0px, 0px, 0px', { duration: 300 } ) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.animateFadeInElement(this.messageSwipeLeft) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.moveElementToElement(this.finger, this.dislikeButton, { duration: 300 }) )
      .then( () => this.animation.pause(300) )
      .then( () => this.animation.animateClickOnElement(this.dislikeButton, 300 ) )
      .then( () => this.animation.moveElementToPoint(this.firstCard, '-250px, 0px, 0px', { duration: 300 } ) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.moveElementToPoint(this.firstCard, '0px, 0px, 0px', { duration: 300 } ) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.animateFadeInElement(this.messageConclusion) )
      .then( () => this.animation.pause(2000) )
      .then( () => this.animation.animateFadeOutElement(this.messageIdeas) )
      .then( () => this.animation.animateFadeOutElement(this.messageSwipeRight) )
      .then( () => this.animation.animateFadeOutElement(this.messageSwipeLeft) )
      .then( () => this.animation.animateFadeOutElement(this.messageConclusion) )
      .then( () => this.animation.moveElementToElement(this.finger, this.finger, { duration: 300 }) )
      // .then( () => this.animationEnd.emit() );
  }
}
