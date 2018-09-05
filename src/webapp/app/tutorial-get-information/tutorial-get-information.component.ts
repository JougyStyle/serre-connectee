import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-tutorial-get-information',
  templateUrl: './tutorial-get-information.component.html',
  styleUrls: ['./tutorial-get-information.component.scss']
})
export class TutorialGetInformationComponent implements OnInit {
  @ViewChild('firstCard') firstCard: ElementRef;
  @ViewChild('elementDetails') elementDetails: ElementRef;
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
      .then( () => this.animation.animateClickOnElement(this.firstCard, 300 ) )
      .then( () => this.animation.pause(200) )
      .then( () => this.animation.moveElementToPoint(this.elementDetails, '0px, -110%, 0px', { duration: 300 } ) )
      .then( () => this.animation.pause(2000) )
      .then( () => this.animation.moveElementToPoint(this.elementDetails, '0px, 0px, 0px', { duration: 300 } ) )
      .then( () => this.animation.pause(1000) )
      // .then( () => this.animationEnd.emit() );
  }
}
