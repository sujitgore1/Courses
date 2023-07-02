import { TestBed } from '@angular/core/testing';

import { BuyNowGuard } from './buy-now.guard';

describe('BuyNowGuard', () => {
  let guard: BuyNowGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BuyNowGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
