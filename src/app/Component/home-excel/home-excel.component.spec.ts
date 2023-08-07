import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExcelComponent } from './home-excel.component';

describe('HomeExcelComponent', () => {
  let component: HomeExcelComponent;
  let fixture: ComponentFixture<HomeExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
