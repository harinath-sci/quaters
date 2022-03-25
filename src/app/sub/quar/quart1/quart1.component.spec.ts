import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quart1Component } from './quart1.component';

describe('Quart1Component', () => {
  let component: Quart1Component;
  let fixture: ComponentFixture<Quart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
