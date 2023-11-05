import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string ="";
  email: string ="";
  pwd: string="";
  role: string="";
  routes: any;

  constructor(private http: HttpClient )
  {
   
  }

  signup()
  {
  debugger
    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "pwd" : this.pwd,
      "role": "employee"
    };
    this.http.post("http://localhost:3000/api/bulkdata/addData",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully");
        this.routes.navigateByUrl('login');
      
 
        this.username= '';
        this.email = '';
        this.pwd  = '';
        this.role="employee";
    });
}
}