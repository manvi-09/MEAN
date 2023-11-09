import { Component,ChangeDetectorRef, AfterContentChecked, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ExcelUploadService} from 'src/app/services/excel-upload.service'
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-excel-upload-mongo',
  templateUrl: './excel-upload-mongo.component.html',
  styleUrls: ['./excel-upload-mongo.component.scss']
})
export class ExcelUploadMongoComponent implements OnInit, AfterContentChecked {
  selectedFile: File | null = null;

  constructor(
    private uploadService: ExcelUploadService, private toastr: ToastrService, private changeDetector: ChangeDetectorRef
  ) {

  }
  ngOnInit() { }
  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.selectedFile = event.target.files[0]
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  upload() {
    debugger;
    if (this.selectedFile) {
      // const formData = new FormData();
      // formData.append('file', this.selectedFile);

      this.uploadService.postUploadExcel(this.selectedFile).subscribe(
        {
          next: (result) => {
            this.toastr.success('File uploaded successfully');
            // Perform any additional actions after successful upload
          },
          error: (error) => {
            this.toastr.error('Error uploading file:', error);
            // Handle error cases
          }
        });
    }

  }
}
