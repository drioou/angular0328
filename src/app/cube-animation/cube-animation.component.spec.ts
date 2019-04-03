import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeAnimationComponent } from './cube-animation.component';

describe('CubeAnimationComponent', () => {
  let component: CubeAnimationComponent;
  let fixture: ComponentFixture<CubeAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
