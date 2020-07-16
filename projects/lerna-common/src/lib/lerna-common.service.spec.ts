import { TestBed } from '@angular/core/testing';

import { LernaCommonService } from './lerna-common.service';

describe('LernaCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LernaCommonService = TestBed.get(LernaCommonService);
    expect(service).toBeTruthy();
  });
});
