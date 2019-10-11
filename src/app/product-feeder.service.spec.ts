import { TestBed } from '@angular/core/testing';

import { ProductFeederService } from './product-feeder.service';

describe('ProductFeederService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductFeederService = TestBed.get(ProductFeederService);
    expect(service).toBeTruthy();
  });
});
