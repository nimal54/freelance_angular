import { TestBed } from '@angular/core/testing';

import { CountryListsService } from './country-lists.service';

describe('CountryListsService', () => {
  let service: CountryListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
