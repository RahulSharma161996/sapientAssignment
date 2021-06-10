import { TestBed } from '@angular/core/testing';

import { SubjectCounterService } from './subject-counter.service';

describe('SubjectCounterService', () => {
  let service: SubjectCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
