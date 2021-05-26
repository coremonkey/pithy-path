import { TestBed } from '@angular/core/testing';

import { PithyService } from './pithy.service';

describe('PithyService', () => {
  let service: PithyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PithyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
