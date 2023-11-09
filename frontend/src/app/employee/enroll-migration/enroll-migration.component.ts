import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enroll-migration',
  templateUrl: './enroll-migration.component.html',
  styleUrls: ['./enroll-migration.component.scss']
})

export class EnrollMigrationComponent{

username: string = '';
fromC: string = '';
toC: string = '';
status:number= 3;  //pending status
  formbuilder: any;
  data:any;
  
constructor(private http: HttpClient) {}

  submitForm()
  {
const loggedInUsername = sessionStorage.getItem('username'); 

    const formData = {
      username: loggedInUsername, 
      fromC: this.fromC,
      toC: this.toC,
      status: this.status
    };

    this.http.post('http://localhost:3000/api/enrollmigration/addData', formData)
      .subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
        },
        error: (error) => {
          console.error('Error submitting form:', error);
        }
      });
}
}

