import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradosRegisterComponent } from './grados-register.component';

describe('GradosRegisterComponent', () => {
  let component: GradosRegisterComponent;
  let fixture: ComponentFixture<GradosRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradosRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradosRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
