import { TestBed } from '@angular/core/testing';

import { CookiesService } from './cookies.service';

describe('CookiesServiceService', () => {
  let service: CookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
