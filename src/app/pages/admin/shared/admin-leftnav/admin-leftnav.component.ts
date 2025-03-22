import { Component } from '@angular/core';
import {  RouterOutlet, RouterLink } from '@angular/router';
import { AdminTopnavComponent } from '../admin-topnav/admin-topnav.component';

@Component({
  selector: 'app-admin-leftnav',
  imports: [RouterOutlet, RouterLink, AdminTopnavComponent],
  templateUrl: './admin-leftnav.component.html',
  styleUrl: './admin-leftnav.component.scss'
})
export class AdminLeftnavComponent {

}
