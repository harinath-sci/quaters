import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formsub1Component } from './formsub1.component';

describe('Formsub1Component', () => {
  let component: Formsub1Component;
  let fixture: ComponentFixture<Formsub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formsub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formsub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
