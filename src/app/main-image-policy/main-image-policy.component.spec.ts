import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImagePolicyComponent } from './main-image-policy.component';

describe('MainImagePolicyComponent', () => {
  let component: MainImagePolicyComponent;
  let fixture: ComponentFixture<MainImagePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainImagePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImagePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
