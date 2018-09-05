import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-tutorial-create-search',
  templateUrl: './tutorial-create-search.component.html',
  styleUrls: ['./tutorial-create-search.component.scss']
})
export class TutorialCreateSearchComponent implements OnInit {
  @ViewChild('bigButton') bigButton : ElementRef;
  @ViewChild('smallButton') smallButton : ElementRef;
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
    return this.animation.pause(100)
      .then( () => Promise.all([
        this.animation.animateClickOnElement(this.bigButton, 300),
        this.animation.animateClickOnElement(this.smallButton, 300),
      ]) )
      .then( () => Promise.all([
        this.animation.animateClickOnElement(this.bigButton, 300),
        this.animation.animateClickOnElement(this.smallButton, 300),
      ]) )
      .then( () => this.animation.pause(2000) )
      // .then( () => this.animationEnd.emit() );
  }

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

  pause(duration) {
    return new Promise( (resolve, reject) => setTimeout( () => resolve(), duration ) );
  }

}
