import { TestBed } from '@angular/core/testing';

import { RestlApiService } from './restl-api.service';

describe('RestlApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestlApiService = TestBed.get(RestlApiService);
    expect(service).toBeTruthy();
  });
});
