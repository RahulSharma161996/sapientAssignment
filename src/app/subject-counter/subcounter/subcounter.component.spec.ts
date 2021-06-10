import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcounterComponent } from './subcounter.component';

describe('CounterComponent', () => {
  let component: SubcounterComponent;
  let fixture: ComponentFixture<SubcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
