import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStreamingComponent } from './page-streaming.component';

describe('PageStreamingComponent', () => {
  let component: PageStreamingComponent;
  let fixture: ComponentFixture<PageStreamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStreamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
