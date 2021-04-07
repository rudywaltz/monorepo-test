import { TestBed } from '@angular/core/testing';

import { RudywaltzTestNpm2Service } from './rudywaltz-test-npm2.service';

describe('RudywaltzTestNpm2Service', () => {
  let service: RudywaltzTestNpm2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RudywaltzTestNpm2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
