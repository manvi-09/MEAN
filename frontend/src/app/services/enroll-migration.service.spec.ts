import { TestBed } from '@angular/core/testing';

import { EnrollMigrationService } from './enroll-migration.service';

describe('EnrollMigrationService', () => {
  let service: EnrollMigrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollMigrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
