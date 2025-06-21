import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../admin-sidebar.component';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterModule, CommonModule, AdminSidebarComponent],
  templateUrl: './user-view.page.html',
  styleUrls: ['./user-view.page.scss'],
})
export class UserViewPage {
  user = {
    id: 1,
    username: 'superadmin',
    name: 'Super Admin',
    email: 'admin@example.com',
    phone: '1234567890',
    role: 'superadmin',
  };

  constructor(private readonly router: Router) {}

  goBack() {
    this.router.navigate(['/admin/users']);
  }

  editUser() {
    this.router.navigate(['/admin/users', this.user.id, 'edit']);
  }
}
