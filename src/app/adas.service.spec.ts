import { TestBed } from '@angular/core/testing';

import { AdasService } from './adas.service';

describe('AdasService', () => {
  let service: AdasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
