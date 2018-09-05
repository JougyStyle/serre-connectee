import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialGetIdeasComponent } from './tutorial-get-ideas.component';

describe('TutorialGetIdeasComponent', () => {
  let component: TutorialGetIdeasComponent;
  let fixture: ComponentFixture<TutorialGetIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialGetIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialGetIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
