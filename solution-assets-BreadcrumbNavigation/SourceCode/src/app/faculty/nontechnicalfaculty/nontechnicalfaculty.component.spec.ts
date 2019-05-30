import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NontechnicalfacultyComponent } from './nontechnicalfaculty.component';

describe('NontechnicalfacultyComponent', () => {
  let component: NontechnicalfacultyComponent;
  let fixture: ComponentFixture<NontechnicalfacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NontechnicalfacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NontechnicalfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
