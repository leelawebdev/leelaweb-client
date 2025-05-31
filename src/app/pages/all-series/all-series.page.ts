import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-series-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './all-series.page.html',
  styleUrls: ['./all-series.page.scss'],
})
export class AllSeriesPage {
  allSeries = [
    {
      title: 'Angular Fundamentals',
      description: 'Learn Angular from scratch.',
      slug: 'angular-fundamentals',
    },
    {
      title: 'React Basics',
      description: 'Start with React.',
      slug: 'react-basics',
    },
    {
      title: 'Node.js Essentials',
      description: 'Node.js for backend.',
      slug: 'nodejs-essentials',
    },
  ];
}
