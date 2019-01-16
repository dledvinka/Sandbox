import { TestBed } from '@angular/core/testing';

import { SupplyPointService } from './supply-point.service';

describe('SupplyPointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplyPointService = TestBed.get(SupplyPointService);
    expect(service).toBeTruthy();
  });
});
