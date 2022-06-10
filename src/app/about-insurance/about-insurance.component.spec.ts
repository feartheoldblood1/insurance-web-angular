import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInsuranceComponent } from './about-insurance.component';

describe('AboutInsuranceComponent', () => {
  let component: AboutInsuranceComponent;
  let fixture: ComponentFixture<AboutInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
