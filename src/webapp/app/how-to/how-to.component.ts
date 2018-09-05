import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {
  activeFeature: EFeature = EFeature.createSearch;
  EFeature = EFeature;
  constructor() { }

  ngOnInit() {
  }
  setFeature(feature: EFeature) {
    this.activeFeature = feature;
  }
}

enum EFeature {
  createSearch= 'createSearch',
  invitePeople= 'invitePeople',
  getIdeas= 'getIdeas',
  getInformation= 'getInformation',
  giveOpinion= 'giveOpinion',
  watchResults= 'watchResults',
}