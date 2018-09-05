import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSortieComponent } from './page-sortie.component';

describe('PageSortieComponent', () => {
  let component: PageSortieComponent;
  let fixture: ComponentFixture<PageSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
