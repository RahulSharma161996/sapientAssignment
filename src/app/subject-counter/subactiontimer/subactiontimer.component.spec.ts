import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubactiontimerComponent } from './subactiontimer.component';

describe('ActiontimerComponent', () => {
  let component: SubactiontimerComponent;
  let fixture: ComponentFixture<SubactiontimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubactiontimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubactiontimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
