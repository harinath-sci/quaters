import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datas2Component } from './datas2.component';

describe('Datas2Component', () => {
  let component: Datas2Component;
  let fixture: ComponentFixture<Datas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
