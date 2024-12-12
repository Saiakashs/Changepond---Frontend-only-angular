import { TestBed } from '@angular/core/testing';

import { ItemsserviceService } from './itemsservice.service';

describe('ItemsserviceService', () => {
  let service: ItemsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
