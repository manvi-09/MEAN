import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExcelUploadService {

  constructor(private http : HttpClient ) { }

  readonly baseURL = "http://localhost:3000/api/bulkdatas";
  

  postUploadExcel(file: File):Observable<any> {
    let uploadfile = new FormData();

    uploadfile.append('uploadfile', file)
    console.log(uploadfile);
    return this.http.post('http://localhost:3000/uploadExcelFile',uploadfile);
  }

}
