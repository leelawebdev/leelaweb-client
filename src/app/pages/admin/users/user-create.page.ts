import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage {
  user = {
    username: '',
    name: '',
    email: '',
    phone: '',
    role: 'user',
    password: '',
    confirmPassword: '',
  };

  constructor(private readonly router: Router) {}

  createUser() {
    // Mock create logic
    this.router.navigate(['/admin/users']);
  }

  cancel() {
    this.router.navigate(['/admin/users']);
  }
}
