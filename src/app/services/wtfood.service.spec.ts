import { TestBed } from '@angular/core/testing';

import { WtfoodService } from './wtfood.service';

describe('WtfoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WtfoodService = TestBed.get(WtfoodService);
    expect(service).toBeTruthy();
  });
});
