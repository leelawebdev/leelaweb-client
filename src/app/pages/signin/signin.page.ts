import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {
  constructor(private router: Router) {}

  onSubmit() {
    console.log('Sign in button clicked!');
    try {
      // Set userRole for admin access
      localStorage.setItem('userRole', 'superadmin');
      console.log('User role set to superadmin');

      // Navigate to admin
      this.router.navigate(['/admin']);
      console.log('Navigating to admin...');
    } catch (error) {
      console.error('Error during signin:', error);
    }
  }
}
