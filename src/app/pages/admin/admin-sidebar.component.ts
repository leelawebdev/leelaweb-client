import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent {
  constructor(private router: Router) {}

  logout() {
    // Clear user role from localStorage
    localStorage.removeItem('userRole');

    // Navigate to signin page
    this.router.navigate(['/signin']);
  }
}
