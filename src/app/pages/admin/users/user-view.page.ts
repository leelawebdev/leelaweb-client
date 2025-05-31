import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
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
