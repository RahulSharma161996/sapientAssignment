import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubloggerComponent } from './sublogger.component';

describe('LoggerComponent', () => {
  let component: SubloggerComponent;
  let fixture: ComponentFixture<SubloggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubloggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
