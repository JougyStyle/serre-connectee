import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialGiveOpinionComponent } from './tutorial-give-opinion.component';

describe('TutorialGiveOpinionComponent', () => {
  let component: TutorialGiveOpinionComponent;
  let fixture: ComponentFixture<TutorialGiveOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialGiveOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialGiveOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
