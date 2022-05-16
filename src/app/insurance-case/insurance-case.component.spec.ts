import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCaseComponent } from './insurance-case.component';

describe('InsuranceCaseComponent', () => {
  let component: InsuranceCaseComponent;
  let fixture: ComponentFixture<InsuranceCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
