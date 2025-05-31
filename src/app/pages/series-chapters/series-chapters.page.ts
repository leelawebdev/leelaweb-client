import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series-chapters-page',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, TitleCasePipe],
  templateUrl: './series-chapters.page.html',
  styleUrls: ['./series-chapters.page.scss'],
})
export class SeriesChaptersPage {
  series: string | null = null;
  chapters = [
    {
      title: 'Getting Started',
      description: 'Intro to the series.',
      duration: '5:12',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80',
      slug: 'getting-started',
    },
    {
      title: 'Project Setup',
      description: 'Setting up your project.',
      duration: '8:34',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80',
      slug: 'project-setup',
    },
    {
      title: 'Core Concepts',
      description: 'Understanding the basics.',
      duration: '12:20',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
      slug: 'core-concepts',
    },
  ];
  constructor(private route: ActivatedRoute) {
    this.series = this.route.snapshot.paramMap.get('series');
  }
}
