import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyOsagoComponent } from './policy-osago.component';

describe('PolicyOsagoComponent', () => {
  let component: PolicyOsagoComponent;
  let fixture: ComponentFixture<PolicyOsagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyOsagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyOsagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
