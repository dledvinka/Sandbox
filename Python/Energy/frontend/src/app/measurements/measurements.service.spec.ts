import { TestBed } from '@angular/core/testing';

import { MeasurementsService } from './measurements.service';

describe('MeasurementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeasurementsService = TestBed.get(MeasurementsService);
    expect(service).toBeTruthy();
  });
});
