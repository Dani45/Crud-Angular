import { TestBed } from '@angular/core/testing';

import { RestsApiService } from './rests-api.service';

describe('RestsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestsApiService = TestBed.get(RestsApiService);
    expect(service).toBeTruthy();
  });
});
