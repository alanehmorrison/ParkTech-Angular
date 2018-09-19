import { TestBed } from '@angular/core/testing';

import { MyparksService } from './myparks.service';

describe('MyparksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyparksService = TestBed.get(MyparksService);
    expect(service).toBeTruthy();
  });
});
