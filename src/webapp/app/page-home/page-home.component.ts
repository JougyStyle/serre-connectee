import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './page-home.component.html',
  styleUrls: [ './page-home.component.scss' ]
})
export class PageHomeComponent {
  stuffAvailableValues: string[] = ['des trucs', 'un resto pour ce soir', 'un bar où refaire le monde', 'un spectacle de ouf', 'un film à regarder ce soir', 'la série du moment'];
  peopleAvailableValues: string[] = ['des gens', 'sa belle-mère', 'ses potes de lycée', 'des collègues un peu coincés'];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
}