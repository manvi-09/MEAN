import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmployeeDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MainComponent } from './main/main.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { EnterHousingDetailsComponent } from './components/enter-housing-details/enter-housing-details.component';
import { ExcelUploadMongoComponent } from './components/excel-upload-mongo/excel-upload-mongo.component';
import { EnrollMigrationComponent } from './employee/enroll-migration/enroll-migration.component';



const routes: Routes = [
  // other routes
  { path: '', redirectTo: '/main', pathMatch:'full'},
  { path: 'main', component: MainComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component:SignupComponent},
  { path: 'empDashboard', component: EmployeeDashboardComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'edit-admin', component: EditAdminComponent },
  { path: 'enterHousingDetails', component: EnterHousingDetailsComponent },
  {path:'uploadExcel', component:ExcelUploadMongoComponent},
  {path:'enrollMigration', component: EnrollMigrationComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
