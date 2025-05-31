import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {
  constructor(private router: Router) {}
  onSubmit() {
    // Optionally set userRole for admin access
    localStorage.setItem('userRole', 'superadmin');
    this.router.navigate(['/admin']);
  }
}
