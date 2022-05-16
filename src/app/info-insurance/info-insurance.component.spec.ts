import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInsuranceComponent } from './info-insurance.component';

describe('InfoInsuranceComponent', () => {
  let component: InfoInsuranceComponent;
  let fixture: ComponentFixture<InfoInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
