import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarComponent } from './quar.component';

describe('QuarComponent', () => {
  let component: QuarComponent;
  let fixture: ComponentFixture<QuarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
