import { TestBed } from '@angular/core/testing';

import { AddjobapplicationService } from './addjobapplication.service';

describe('AddjobapplicationService', () => {
  let service: AddjobapplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddjobapplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
