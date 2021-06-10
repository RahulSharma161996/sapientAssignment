import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdisplaytimerComponent } from './subdisplaytimer.component';

describe('DisplaytimerComponent', () => {
  let component: SubdisplaytimerComponent;
  let fixture: ComponentFixture<SubdisplaytimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdisplaytimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdisplaytimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
