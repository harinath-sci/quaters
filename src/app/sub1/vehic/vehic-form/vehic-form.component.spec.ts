import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicFormComponent } from './vehic-form.component';

describe('VehicFormComponent', () => {
  let component: VehicFormComponent;
  let fixture: ComponentFixture<VehicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
