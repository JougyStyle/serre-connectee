import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrenomComponent } from './page-prenom.component';

describe('PagePrenomComponent', () => {
  let component: PagePrenomComponent;
  let fixture: ComponentFixture<PagePrenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePrenomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
