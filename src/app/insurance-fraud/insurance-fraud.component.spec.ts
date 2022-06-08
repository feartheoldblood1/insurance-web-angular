import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceFraudComponent } from './insurance-fraud.component';

describe('InsuranceFraudComponent', () => {
  let component: InsuranceFraudComponent;
  let fixture: ComponentFixture<InsuranceFraudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceFraudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceFraudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
