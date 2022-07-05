import { TestBed } from '@angular/core/testing';

import { SkaiciuotiService } from './skaiciuoti.service';

describe('SkaiciuotiService', () => {
  let service: SkaiciuotiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkaiciuotiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
