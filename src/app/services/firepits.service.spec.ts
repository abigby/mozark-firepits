import { TestBed } from '@angular/core/testing';

import { FirepitsService } from './firepits.service';

describe('FirepitsService', () => {
  let service: FirepitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirepitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
