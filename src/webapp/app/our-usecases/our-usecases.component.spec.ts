import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurUsecasesComponent } from './our-usecases.component';

describe('OurUsecasesComponent', () => {
  let component: OurUsecasesComponent;
  let fixture: ComponentFixture<OurUsecasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurUsecasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurUsecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
