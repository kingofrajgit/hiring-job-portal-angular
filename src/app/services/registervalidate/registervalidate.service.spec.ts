import { TestBed } from '@angular/core/testing';

import { RegistervalidateService } from './registervalidate.service';

describe('RegistervalidateService', () => {
  let service: RegistervalidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistervalidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
