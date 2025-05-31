import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar.component';

@Component({
  selector: 'app-series-create',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './series-create.page.html',
  styleUrls: ['./series-create.page.scss'],
})
export class SeriesCreatePage {
  series = {
    title: '',
    slug: '',
    topic: '',
    description: '',
  };

  constructor(private readonly router: Router) {}

  createSeries() {
    // Mock: Normally, you would call a service to save the series
    this.router.navigate(['/admin/series']);
  }

  cancel() {
    this.router.navigate(['/admin/series']);
  }
}
