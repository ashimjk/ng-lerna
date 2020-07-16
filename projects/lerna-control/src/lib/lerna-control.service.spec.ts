import { TestBed } from '@angular/core/testing';

import { LernaControlService } from './lerna-control.service';

describe('LernaControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LernaControlService = TestBed.get(LernaControlService);
    expect(service).toBeTruthy();
  });
});
