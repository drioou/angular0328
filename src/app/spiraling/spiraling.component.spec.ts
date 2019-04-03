import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralingComponent } from './spiraling.component';

describe('SpiralingComponent', () => {
  let component: SpiralingComponent;
  let fixture: ComponentFixture<SpiralingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiralingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiralingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
