import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterExcelComponent } from './register-excel.component';

describe('RegisterExcelComponent', () => {
  let component: RegisterExcelComponent;
  let fixture: ComponentFixture<RegisterExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
