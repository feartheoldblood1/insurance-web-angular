import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsagoFormComponent } from './osago-form.component';

describe('OsagoFormComponent', () => {
  let component: OsagoFormComponent;
  let fixture: ComponentFixture<OsagoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsagoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsagoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
