import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaskoFormComponent } from './kasko-form.component';

describe('KaskoFormComponent', () => {
  let component: KaskoFormComponent;
  let fixture: ComponentFixture<KaskoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaskoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaskoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
