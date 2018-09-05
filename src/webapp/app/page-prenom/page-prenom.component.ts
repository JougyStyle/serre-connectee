import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EventsService } from './../events.service';

@Component({
  selector: 'app-page-prenom',
  templateUrl: './page-prenom.component.html',
  styleUrls: ['./page-prenom.component.scss']
})
export class PagePrenomComponent {
  availableValues: string[] = [
    'Marius',
    'Paulo',
    'Abdul',
    'Jean-Baptiste',
    'Sophie',
    'Cléo',
    'Emma',
    'Colette',
  ];
  sample: any = {
    _id: '5a8d82b3254c4120ad79f829',
    providerElementId: '5a8d82b3254c4120ad79f829',
    providerName: 'buddiz',
    params: {
      sexe: 'F',
      categories: [
        'medievaux',
        'anglophones'
      ],
      name: 'EMMA',
      useCase: [
        'firstName'
      ]
    }
  }
  openSample: boolean = false;
  iframeUrl: string = 'https://app.buddiz.io/%23/element-iframe/5a8d82b3254c4120ad79f829';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private events: EventsService,
  ) {
    this.events.emit('loadIframeUrl', { url: this.iframeUrl });
  }

  openSampleElement () {
    this.events.emit('showIframe', { url: this.iframeUrl });
  }
  dismiss () {
    this.events.emit('hideIframe', { url: this.iframeUrl });
  }
}
