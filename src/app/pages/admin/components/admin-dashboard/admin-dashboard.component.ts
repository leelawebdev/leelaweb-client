import { Component } from '@angular/core';
import { AdminLeftnavComponent } from '../../shared/admin-leftnav/admin-leftnav.component';
import { AdminTopnavComponent } from '../../shared/admin-topnav/admin-topnav.component';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  imports: [
    AdminLeftnavComponent,
    AdminTopnavComponent,
  ]
})
export class AdminDashboardComponent {

}
