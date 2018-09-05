import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialWatchResultComponent } from './tutorial-watch-result.component';

describe('TutorialWatchResultComponent', () => {
  let component: TutorialWatchResultComponent;
  let fixture: ComponentFixture<TutorialWatchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialWatchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialWatchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
