import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiontimerComponent } from './actiontimer.component';

describe('ActiontimerComponent', () => {
  let component: ActiontimerComponent;
  let fixture: ComponentFixture<ActiontimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiontimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiontimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
