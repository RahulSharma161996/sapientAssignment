import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCounterComponent } from './subject-counter.component';

describe('SubjectCounterComponent', () => {
  let component: SubjectCounterComponent;
  let fixture: ComponentFixture<SubjectCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
