import { TestBed } from '@angular/core/testing';

import { MeasureValueControlService } from './measure-value-control.service';

describe('MeasureValueControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeasureValueControlService = TestBed.get(MeasureValueControlService);
    expect(service).toBeTruthy();
  });
});
