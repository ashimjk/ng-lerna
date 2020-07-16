import { TestBed } from '@angular/core/testing';

import { LernaSampleService } from './lerna-sample.service';

describe('LernaSampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LernaSampleService = TestBed.get(LernaSampleService);
    expect(service).toBeTruthy();
  });
});
