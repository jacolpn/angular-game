import { TestBed } from '@angular/core/testing';

import { FirstSeasonService } from './first-season.service';

describe('FirstSeasonService', () => {
  let service: FirstSeasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstSeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
