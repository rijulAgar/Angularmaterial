import { TestBed, inject } from '@angular/core/testing';

import { ServicetryService } from './servicetry.service';

describe('ServicetryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicetryService]
    });
  });

  it('should be created', inject([ServicetryService], (service: ServicetryService) => {
    expect(service).toBeTruthy();
  }));
});
