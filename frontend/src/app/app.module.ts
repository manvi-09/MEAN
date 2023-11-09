import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import {  Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeDashboardComponent } from './components/emp-dashboard/emp-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MainComponent } from './main/main.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { EnterHousingDetailsComponent } from './components/enter-housing-details/enter-housing-details.component';
import { ExcelUploadMongoComponent } from './components/excel-upload-mongo/excel-upload-mongo.component';
import { EnrollMigrationComponent } from './employee/enroll-migration/enroll-migration.component';

 const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  // {path: 'dashboard', component:DashboardComponent},
  { path: 'empDashboard', component: EmployeeDashboardComponent },
{ path:'adminDashboard',component:AdminDashboardComponent},
{path:'uploadExcel', component: ExcelUploadMongoComponent}

 ];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    MainComponent,
    EditAdminComponent,
    EnterHousingDetailsComponent,
    ExcelUploadMongoComponent,
    EnrollMigrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
