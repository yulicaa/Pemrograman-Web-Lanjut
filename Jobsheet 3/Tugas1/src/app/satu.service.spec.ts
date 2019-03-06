import { TestBed } from '@angular/core/testing';

import { SatuService } from './satu.service';

describe('SatuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SatuService = TestBed.get(SatuService);
    expect(service).toBeTruthy();
  });
});
