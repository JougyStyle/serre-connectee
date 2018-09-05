import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-tutorial-invite-people',
  templateUrl: './tutorial-invite-people.component.html',
  styleUrls: ['./tutorial-invite-people.component.scss'],
})
export class TutorialInvitePeopleComponent implements OnInit {
  @ViewChild('smallShareButton') smallShareButton: ElementRef;
  @ViewChild('shareSection') shareSection: ElementRef;
  @ViewChild('finger') finger: ElementRef;
  @ViewChild('whatsapp') whatsapp: ElementRef;
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
    return this.animation.pause(0)
      .then( () => this.animation.moveElementToElement(this.finger, this.smallShareButton, { duration: 500 } ) )
      .then( () => this.animation.animateClickOnElement(this.smallShareButton) )
      .then( () => this.animation.pause(200) )
      .then( () => this.animation.moveElementToPoint(this.shareSection, '0px, -150px, 0px' ) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.moveElementToElement(this.finger, this.whatsapp, { duration: 500 } ) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.animateClickOnElement(this.whatsapp) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.moveElementToPoint(this.shareSection, '0px, 0px, 0px' ) )
      .then( () => this.animation.pause(500) )
      .then( () => this.animation.moveElementToElement(this.finger, this.finger, { duration: 500 }) )
      .then( () => this.animation.pause(1000) )
      .then( () => this.animation.animateFadeOutElement(this.finger) )
      .then( () => this.animation.pause(1000) )
      // .then( () => this.animationEnd.emit() );
  }
}
