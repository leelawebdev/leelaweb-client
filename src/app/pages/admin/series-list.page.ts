import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar.component';

interface Series {
  title: string;
  slug: string;
  topic: string;
  description: string;
}

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [RouterModule, CommonModule, AdminSidebarComponent],
  templateUrl: './series-list.page.html',
  styleUrls: ['./series-list.page.scss'],
})
export class SeriesListPage {
  seriesList: Series[] = [
    {
      title: 'Angular Fundamentals',
      slug: 'angular-fundamentals',
      topic: 'Angular',
      description: 'Learn the basics of Angular.',
    },
    {
      title: 'React Essentials',
      slug: 'react-essentials',
      topic: 'React',
      description: 'Master React core concepts.',
    },
    {
      title: 'Node.js Crash Course',
      slug: 'nodejs-crash-course',
      topic: 'Node.js',
      description: 'Get started with Node.js.',
    },
    {
      title: 'Docker for Devs',
      slug: 'docker-for-devs',
      topic: 'Docker',
      description: 'Containerize your apps with Docker.',
    },
  ];

  constructor(private readonly router: Router) {}

  deleteSeries(slug: string) {
    this.seriesList = this.seriesList.filter((series) => series.slug !== slug);
  }
}
