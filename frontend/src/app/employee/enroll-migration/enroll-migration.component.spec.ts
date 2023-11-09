import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollMigrationComponent } from './enroll-migration.component';

describe('EnrollMigrationComponent', () => {
  let component: EnrollMigrationComponent;
  let fixture: ComponentFixture<EnrollMigrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollMigrationComponent]
    });
    fixture = TestBed.createComponent(EnrollMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
