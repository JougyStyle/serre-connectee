import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUpdatingTextComponent } from './auto-updating-text.component';

describe('AutoUpdatingTextComponent', () => {
  let component: AutoUpdatingTextComponent;
  let fixture: ComponentFixture<AutoUpdatingTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoUpdatingTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoUpdatingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
