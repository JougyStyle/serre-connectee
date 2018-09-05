import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EventsService } from './../events.service';

@Component({
  selector: 'app-page-streaming',
  templateUrl: './page-streaming.component.html',
  styleUrls: ['./page-streaming.component.scss']
})
export class PageStreamingComponent {
  sample: any = {
    _id: '5ab3bcc641cef46927f9d828',
    providerElementId: '5ab3bcc641cef46927f9d828',
    providerName: 'buddiz',
    params: {
      name: "Casse-tête chinois",
      useCase: ["vstreaming"],
      provider: [ "netflix" ],
      objectType: "movie",
      originalName: "Casse-Tête Chinois",
      categories: [ "comedy", "drama", "romance" ],
      releaseYear: 2013,
      duration: 117
    }
  };
  openSample: boolean = false;
  iframeUrl: string = 'https://app.buddiz.io/%23/element-iframe/5ab3bcc641cef46927f9d828';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private events: EventsService
  ) {
    this.events.emit('loadIframeUrl', { url: this.iframeUrl });
  }
  openSampleElement () {
    this.events.emit('loadIframeUrl', { url: this.iframeUrl });
    this.events.emit('showIframe', { url: this.iframeUrl });
  }
  dismiss () {
    this.events.emit('hideIframe', { url: this.iframeUrl });
  }
}
