import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvsArrowComponent } from './svs-arrow.component';

describe('SvsArrowComponent', () => {
  let component: SvsArrowComponent;
  let fixture: ComponentFixture<SvsArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvsArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvsArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
