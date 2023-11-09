import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelUploadMongoComponent } from './excel-upload-mongo.component';

describe('ExcelUploadMongoComponent', () => {
  let component: ExcelUploadMongoComponent;
  let fixture: ComponentFixture<ExcelUploadMongoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelUploadMongoComponent]
    });
    fixture = TestBed.createComponent(ExcelUploadMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
