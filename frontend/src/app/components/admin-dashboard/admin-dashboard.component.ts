import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/bulk-data.service';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EditAdminComponent } from '../edit-admin/edit-admin.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  employeeDetails: any;
  username: any;
  dataObj: any = {
    username:'',
    email:'',
    organization:'',
    employeeBand: '',
    currentLocation: '',
    country: '', 
    county:'', 
    area: '', 
    houseType: '', 
    houseSize: '', 
    cost: '', 
    rent:'',
    rentTenure: '',
    role: '',
    _id:''

  };

  constructor(private employeeService: EmployeeService,private http: HttpClient,private router: Router) {}

  ngOnInit(): void
  {
    this.employeeService.getAllEmployeeDetails().subscribe({
      next: (data) => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
      },
      error :(error) => {
        console.error('Error retrieving employee details:', error);
      }
    });
    
  }
  editEmployee(selectedEmployee: any) {
    this.router.navigate(['/edit-admin'], { state: { employee: selectedEmployee } });
  }
}