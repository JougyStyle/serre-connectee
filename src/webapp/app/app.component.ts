import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SEOService } from './seo.service';
import { NavigationEnd, Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { EventsService } from './events.service';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Buddiz';
  isPopState: boolean = false;
  pageLoaded: boolean = false;
  showIframe: boolean = false;
  iframeUrl: string = 'https://app.buddiz.io/%23/element-iframe/5a8d82b3254c4120ad79f829';
  constructor (
    @Inject(PLATFORM_ID) private platformId: Object,
    private seoService: SEOService,
    private router: Router,
    private locStrat: LocationStrategy,
    private events: EventsService,
  ) {
    seoService.addSeoData()
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener("load", function(event) {
        this.detectUserActivity()
        .then( () => console.log('user activity'))
        .then( () => this.pageLoaded = true)
      }.bind(this));
    }

    this.events.messageObs.pipe(
      filter( (message: any) => ['loadIframeUrl', 'showIframe', 'hideIframe'].indexOf(message.channel) > -1),
      tap( (message: any) => {
        if (message.channel === 'loadIframeUrl' && typeof message.payload === 'object' && typeof message.payload.url === 'string') {
          this.iframeUrl = message.payload.url;
        }
        if (message.channel === 'showIframe') {
          this.showIframe = true;
        }
        if (message.channel === 'hideIframe') {
          this.showIframe = false;
        }
      })
    ).subscribe( (message) => console.error(message) );
  }

  ngOnInit(): void {

		this.goTopIfRequired();
  }

  detectUserActivity () {
    return new Promise( (resolve, reject) => {
      // DOM Events
      document.onmousemove = resolve;
      document.onkeypress = resolve;
      document.onmousedown = resolve; // touchscreen presses
      document.ontouchstart = resolve;
      document.onclick = resolve;     // touchpad clicks
      document.onscroll = resolve;    // scrolling with arrow keys
    })
  }
  dismiss () {
    this.showIframe = false;
  }

  /**
   * Cette fonction sert à remonter la page en haut dans le cas d'un changement de page au niveau du router.
   * cf : https://stackoverflow.com/a/49233351
   */
  goTopIfRequired () {
    this.locStrat.onPopState(() => {
		  this.isPopState = true;
		});
		
		this.router.events.subscribe(event => {
		  // Scroll to top if accessing a page, not via browser history stack
		  if (event instanceof NavigationEnd && !this.isPopState) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto' // available value : smooth, instant, or auto
        })
        this.isPopState = false;
		  }
		  
		  // Ensures that isPopState is reset
		  if (event instanceof NavigationEnd) {
			this.isPopState = false;
		  }
		});
  }
}