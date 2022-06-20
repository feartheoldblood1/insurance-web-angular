import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirusInputsComponent } from './virus-inputs.component';

describe('VirusInputsComponent', () => {
  let component: VirusInputsComponent;
  let fixture: ComponentFixture<VirusInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirusInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirusInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
