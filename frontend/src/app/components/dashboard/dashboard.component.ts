import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  employee: string = '/employee';
  login: string = '/login';
  signup: string = '/signup';

  constructor(private router: Router) { }


}
