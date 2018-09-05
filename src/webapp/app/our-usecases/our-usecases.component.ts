import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-our-usecases',
  templateUrl: './our-usecases.component.html',
  styleUrls: ['./our-usecases.component.scss']
})
export class OurUsecasesComponent implements OnInit {
  @Input() usecaseToHide: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
