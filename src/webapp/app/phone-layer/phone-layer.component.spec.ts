import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneLayerComponent } from './phone-layer.component';

describe('PhoneLayerComponent', () => {
  let component: PhoneLayerComponent;
  let fixture: ComponentFixture<PhoneLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
