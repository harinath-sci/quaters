import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsubComponent } from './formsub.component';

describe('FormsubComponent', () => {
  let component: FormsubComponent;
  let fixture: ComponentFixture<FormsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
