import { TestBed } from '@angular/core/testing';

import { RudywaltzTestNpmService } from './rudywaltz-test-npm.service';

describe('RudywaltzTestNpmService', () => {
  let service: RudywaltzTestNpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RudywaltzTestNpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
