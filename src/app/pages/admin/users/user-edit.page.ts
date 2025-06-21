import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from '../admin-sidebar.component';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage {
  user = {
    id: 1,
    username: 'superadmin',
    name: 'Super Admin',
    email: 'admin@example.com',
    phone: '1234567890',
    role: 'superadmin',
  };

  constructor(private readonly router: Router) {}

  saveUser() {
    // Mock save logic
    this.router.navigate(['/admin/users', this.user.id]);
  }

  cancel() {
    this.router.navigate(['/admin/users', this.user.id]);
  }
}
