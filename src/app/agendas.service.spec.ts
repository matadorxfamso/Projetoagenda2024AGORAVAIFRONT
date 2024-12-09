import { TestBed } from '@angular/core/testing';

import { agendasService } from './agendas.service';

describe('AgendasService', () => {
  let service: agendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(agendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
