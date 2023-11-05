import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { EmployeeService } from 'src/app/services/bulk-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string ="";
  email: string ="";
  pwd: string="";
  role: string="employee";
 
  constructor(private http: HttpClient, public router: Router,private employeeService: EmployeeService )
  {
   
  }

  login()
  {
  console.log('Login button clicked'); 
    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "pwd" : this.pwd,
      "role":"employee"
    };
    this.http.get(`http://localhost:3000/api/bulkdata/getData/${this.username}`).subscribe((resultData: any)=>
    {
      debugger
        console.log(resultData);
        sessionStorage.setItem('username',resultData.username);
        sessionStorage.setItem('role', resultData.role);
        alert("Logged in Successfully");
        if(resultData.role==='employee'){
          if(resultData.country!=undefined){
        this.router.navigate(['/empDashboard']);}
         else{
          this.router.navigate(['/enterHousingDetails']);
         }
      }
        else if (resultData.role === 'admin') {
          this.router.navigate(['/adminDashboard']);
        }else {
          alert("Invalid role");
        }

        if (resultData.userName===null){
          alert("User not found")
        }

       
        this.employeeService.getEmployeeDetails(this.username).subscribe
        ({
          next: (data) => {
            // Handle the retrieved employee details
            console.log(data);
            // Redirect to the dashboard
           
          },
          error: (error) => {
            console.error('Error retrieving employee details:', error);
          }
       });
    this.employeeService.getAllEmployeeDetails().subscribe({
      next: (data) => {
        // Handle the retrieved employee details
        console.log(data);
        // Redirect to the dashboard
       
      },
      error: (error) => {
        console.error('Error retrieving employee details:', error);
      }
    });
 
        this.username= '';
        this.email = '';
        this.pwd  = '';
        // this.routes.navigateByUrl('dashboard');
        
    });
}
goToDashboard() {
  this.router.navigate(['/dashboard']);}
}
