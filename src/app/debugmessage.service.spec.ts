import { TestBed } from '@angular/core/testing';

import { DebugmessageService } from './debugmessage.service';

describe('DebugmessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebugmessageService = TestBed.get(DebugmessageService);
    expect(service).toBeTruthy();
  });
});
