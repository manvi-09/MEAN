import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EmployeeService } from 'src/app/services/bulk-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-housing-details',
  templateUrl: './enter-housing-details.component.html',
  styleUrls: ['./enter-housing-details.component.scss']
})
export class EnterHousingDetailsComponent {
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
    _id:'',
    selectedFile:File
 
  };

  constructor(private employeeService: EmployeeService,private http: HttpClient,public routes: Router) {}
 
  ngOnInit(): void {
 
 
    this.username=sessionStorage.getItem('username')
    // console.log(this.username);
    this.http.get(`http://localhost:3000/api/bulkData/getData/${this.username}`).subscribe(
      (result)=>{
        this.dataObj=result
        // console.log(result._id);
         console.log(this.dataObj);
      }
    )
  }
  detailsAdded(): void
  {
    debugger
    const formData = new FormData();
    formData.append('username', this.dataObj.username);
    formData.append('selectedFile', this.dataObj.selectedFile);
    formData.append('organization', this.dataObj.organization);
    formData.append('employeeBand', this.dataObj.employeeBand);
    formData.append('currentLocation', this.dataObj.currentLocation);
    formData.append('country', this.dataObj.country);
    formData.append('county', this.dataObj.county);
    formData.append('area', this.dataObj.area);
    formData.append('houseType', this.dataObj.houseType);
    formData.append('houseSize', this.dataObj.houseSize);
    formData.append('cost', this.dataObj.cost);
    formData.append('rent', this.dataObj.rent);
    formData.append('rentTenure', this.dataObj.rentTenure);
    this.employeeService.updateData(this.dataObj.username,formData).subscribe(
      ()=> {
        alert("data updated !!!");
        console.log('Image uploaded successfully');
      }
    )
  }


  onFileSelected(event: any) {
    this.dataObj.selectedFile = event.target.files[0];
  

  
}
}
