import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsagoKaskoComponent } from './osago-kasko.component';

describe('OsagoKaskoComponent', () => {
  let component: OsagoKaskoComponent;
  let fixture: ComponentFixture<OsagoKaskoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsagoKaskoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsagoKaskoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
