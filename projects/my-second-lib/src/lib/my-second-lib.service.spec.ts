import { TestBed } from '@angular/core/testing';

import { MySecondLibService } from './my-second-lib.service';

describe('MySecondLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySecondLibService = TestBed.get(MySecondLibService);
    expect(service).toBeTruthy();
  });
});
