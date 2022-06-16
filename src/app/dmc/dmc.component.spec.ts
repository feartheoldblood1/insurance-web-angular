import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmcComponent } from './dmc.component';

describe('DmcComponent', () => {
  let component: DmcComponent;
  let fixture: ComponentFixture<DmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
