import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/bulk-data.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {
  employee: any;
  editForm: FormGroup = new FormGroup({}); // Initialize editForm with an empty FormGroup
  existingData: any;
  showEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employee = history.state.employee;
    this.editForm = this.formBuilder.group({
      username: [this.employee.username],
      email: [this.employee.email],
      organization: [this.employee.organization],
      employeeBand: [this.employee.employeeBand],
      currentLocation: [this.employee.currentLocation],
      country: [this.employee.country],
      county: [this.employee.county],
      area: [this.employee.area],
      houseType: [this.employee.houseType],
      houseSize: [this.employee.houseSize],
      cost: [this.employee.cost],
      rent: [this.employee.rent],
      rentTenure: [this.employee.rentTenure],
      role: [this.employee.role],
    });
  }

  // toggleEditForm(): void {
  //   debugger;
  //   this.showEdit = !this.showEdit;
  // }

  onSubmit(): void {

    const formData = new FormData();
    formData.append('username',this.employee.username);
    formData.append('selectedFile', this.employee.selectedFile);
    formData.append('organization', this.employee.organization);
    formData.append('employeeBand', this.employee.employeeBand);
    formData.append('currentLocation', this.employee.currentLocation);
    formData.append('country', this.employee.country);
    formData.append('county', this.employee.county);
    formData.append('area', this.employee.area);
    formData.append('houseType', this.employee.houseType);
    formData.append('houseSize', this.employee.houseSize);
    formData.append('cost', this.employee.cost);
    formData.append('rent', this.employee.rent);
    formData.append('rentTenure', this.employee.rentTenure);
    
    console.log(this.editForm.value);
    this.employeeService.updateData( this.editForm.value,formData).subscribe(() => {
      alert('data updated !!!');
      
    });

  }
}