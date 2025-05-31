import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  constructor(private router: Router) {}
  onSubmit() {
    // Optionally set userRole for admin access
    localStorage.setItem('userRole', 'superadmin');
    this.router.navigate(['/admin']);
  }
}
