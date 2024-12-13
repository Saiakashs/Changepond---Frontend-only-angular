import { TestBed } from '@angular/core/testing';

import { MytestSerService } from './mytest-ser.service';

describe('MytestSerService', () => {
  let service: MytestSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytestSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check multiplication', () => {
    let _serObj=new MytestSerService();
    let result=_serObj.mul(8,5);
    expect(result).toBe(40);
  });
});
