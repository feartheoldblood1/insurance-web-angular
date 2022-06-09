import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPropertyComponent } from './legal-property.component';

describe('LegalPropertyComponent', () => {
  let component: LegalPropertyComponent;
  let fixture: ComponentFixture<LegalPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
