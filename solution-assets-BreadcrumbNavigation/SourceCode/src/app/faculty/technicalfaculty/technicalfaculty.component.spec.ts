import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalfacultyComponent } from './technicalfaculty.component';

describe('TechnicalfacultyComponent', () => {
  let component: TechnicalfacultyComponent;
  let fixture: ComponentFixture<TechnicalfacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalfacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
