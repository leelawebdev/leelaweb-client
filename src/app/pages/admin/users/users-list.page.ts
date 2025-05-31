import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../admin-sidebar.component';

// Mock user data (should be replaced with a service or backend integration)
interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  role: string;
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterModule, CommonModule, AdminSidebarComponent],
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage {
  users: User[] = [
    {
      id: 1,
      username: 'superadmin',
      name: 'Super Admin',
      email: 'admin@example.com',
      phone: '1234567890',
      role: 'superadmin',
    },
    {
      id: 2,
      username: 'johndoe',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '9876543210',
      role: 'user',
    },
    {
      id: 3,
      username: 'janedoe',
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '5555555555',
      role: 'user',
    },
  ];

  constructor(private readonly router: Router) {}

  viewUser(id: number) {
    this.router.navigate(['/admin/users', id]);
  }

  editUser(id: number) {
    this.router.navigate(['/admin/users', id, 'edit']);
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  createUser() {
    this.router.navigate(['/admin/users/create']);
  }
}
