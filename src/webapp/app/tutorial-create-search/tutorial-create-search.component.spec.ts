import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialCreateSearchComponent } from './tutorial-create-search.component';

describe('TutorialCreateSearchComponent', () => {
  let component: TutorialCreateSearchComponent;
  let fixture: ComponentFixture<TutorialCreateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialCreateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialCreateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
