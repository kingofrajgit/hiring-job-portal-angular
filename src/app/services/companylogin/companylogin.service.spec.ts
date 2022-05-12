import { TestBed } from '@angular/core/testing';

import { CompanyloginService } from './companylogin.service';

describe('CompanyloginService', () => {
  let service: CompanyloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
