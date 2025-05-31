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
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
    },
    {
      title: 'React Basics',
      description: 'Start with React.',
      slug: 'react-basics',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      title: 'Node.js Essentials',
      description: 'Node.js for backend.',
      slug: 'nodejs-essentials',
      image: 'https://nodejs.org/static/images/logo.svg',
    },
  ];
}
