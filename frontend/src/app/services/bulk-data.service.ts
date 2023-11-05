import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/bulkdata/getData/{username}'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getEmployeeDetails(username: string): Observable<any> {
    const url = `${this.apiUrl}/${username}`;
    return this.http.get<any>(url);
  }
  
  private apiallUrl = 'http://localhost:3000/api/bulkdata/getData'; 
  getAllEmployeeDetails(): Observable<any> {
    return this.http.get<any>(this.apiallUrl);
  }
  
  checkRole(){
    return sessionStorage.getItem('role');
  }
  

  updateData(username: string,formData:FormData) {
    const url = `http://localhost:3000/api/bulkdata/updateData/${username}`;
    return this.http.put(url, formData);
  }
  
}