import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage {
  topicSlug: string | null = null;

  chapters = [
    {
      title: 'Chapter 1: Getting Started',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80',
      description: 'Introduction to the series.',
      duration: '5:12',
    },
    {
      title: 'Chapter 2: Project Setup',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80',
      description: 'Setting up your project.',
      duration: '8:34',
    },
    {
      title: 'Chapter 3: Core Concepts',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
      description: 'Understanding the basics.',
      duration: '12:20',
    },
    {
      title: 'Chapter 4: Advanced Patterns',
      image:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80',
      description: 'Diving deeper into advanced topics.',
      duration: '10:45',
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.topicSlug = this.route.snapshot.paramMap.get('topic');
  }
}
