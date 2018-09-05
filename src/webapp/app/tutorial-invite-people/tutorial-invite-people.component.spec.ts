import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialInvitePeopleComponent } from './tutorial-invite-people.component';

describe('TutorialInvitePeopleComponent', () => {
  let component: TutorialInvitePeopleComponent;
  let fixture: ComponentFixture<TutorialInvitePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialInvitePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialInvitePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
