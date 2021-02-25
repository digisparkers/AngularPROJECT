import { TestBed } from '@angular/core/testing';

import { SucesslogginggService } from './sucessloggingg.service';

describe('SucesslogginggService', () => {
  let service: SucesslogginggService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SucesslogginggService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
