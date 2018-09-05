import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialGetInformationComponent } from './tutorial-get-information.component';

describe('TutorialGetInformationComponent', () => {
  let component: TutorialGetInformationComponent;
  let fixture: ComponentFixture<TutorialGetInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialGetInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialGetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
