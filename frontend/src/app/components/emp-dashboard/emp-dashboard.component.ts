import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/bulk-data.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  employeeDetails: any;
  username: any;
  dataObj: any = 
  {
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
  showEdit:boolean=false;
  routes: any;
  router: any;
  constructor(private employeeService: EmployeeService,private http: HttpClient) {}

   ngOnInit(): void 
   {
    this.username=sessionStorage.getItem('username')
    debugger
    // console.log(this.username);
    this.http.get(`http://localhost:3000/api/bulkData/getData/${this.username}`).subscribe(
      (result)=>{
        this.dataObj=result
        // console.log(result._id);
         console.log(this.dataObj);
         if (this.dataObj.selectedFile) {
          const fileUrl = `http://localhost:3000/api/bulkData/download/${this.username}`;
  
          // Trigger the file download
          this.downloadFile(fileUrl);
        }
      }
    ) 
  };

  enterHousing(): void
  {
    if (this.dataObj.country===undefined){
      this.router.navigate("/enterHousingDetails");
    }
  }
 
  toggleEditForm(): void
  {
    debugger
    this.showEdit = !this.showEdit
  }
 
  editForm(): void
  {
    const formData = new FormData();
    formData.append('username', this.dataObj.username);
    formData.append('selectedFile', this.dataObj.selectedFile, this.dataObj.selectedFile.name);
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
   
    console.log(this.dataObj.country);
    this.employeeService.updateData(this.dataObj.userName,formData).subscribe(
      ()=> {
        alert("data updated !!!");
      }
    )
  }
 
    downloadFile(fileUrl: string): void 
  {
      this.http.get(fileUrl, { responseType: 'blob'}).subscribe({
        next: (response: Blob) => {
          const blob = new Blob([response], { type: 'image/jpg' });
          const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.jpeg';

        // Programmatically click the link to trigger the download
        link.click();

        // Clean up the URL object
        window.URL.revokeObjectURL(url);
        }
    });
  }
  
  getObjectKeys(obj: any): string[] 
  {
    return Object.keys(obj);
  } 
}