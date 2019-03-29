import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaidumapsComponent } from './baidumaps.component';

describe('BaidumapsComponent', () => {
  let component: BaidumapsComponent;
  let fixture: ComponentFixture<BaidumapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaidumapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaidumapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
