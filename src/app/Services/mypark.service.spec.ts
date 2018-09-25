import { TestBed } from '@angular/core/testing';

import { MyParkService } from './mypark.service';

describe('MyParkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyParkService = TestBed.get(MyParkService);
    expect(service).toBeTruthy();
  });
});
