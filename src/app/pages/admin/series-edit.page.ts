import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar.component';

@Component({
  selector: 'app-series-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './series-edit.page.html',
  styleUrls: ['./series-edit.page.scss'],
})
export class SeriesEditPage {
  series = {
    title: '',
    slug: '',
    topic: '',
    description: ''
  };

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {
    // Mock: Load series by slug from route param
    const slug = this.route.snapshot.paramMap.get('slug');
    // In real app, fetch series from service
    if (slug === 'angular-fundamentals') {
      this.series = { title: 'Angular Fundamentals', slug: 'angular-fundamentals', topic: 'Angular', description: 'Learn the basics of Angular.' };
    } else if (slug === 'react-essentials') {
      this.series = { title: 'React Essentials', slug: 'react-essentials', topic: 'React', description: 'Master React core concepts.' };
    } else if (slug === 'nodejs-crash-course') {
      this.series = { title: 'Node.js Crash Course', slug: 'nodejs-crash-course', topic: 'Node.js', description: 'Get started with Node.js.' };
    } else if (slug === 'docker-for-devs') {
      this.series = { title: 'Docker for Devs', slug: 'docker-for-devs', topic: 'Docker', description: 'Containerize your apps with Docker.' };
    }
  }

  saveSeries() {
    // Mock: Normally, you would call a service to save the series
    this.router.navigate(['/admin/series']);
  }

  cancel() {
    this.router.navigate(['/admin/series']);
  }
}
