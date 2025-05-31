import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topic-series-page',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe, RouterLink],
  templateUrl: './topic-series.page.html',
  styleUrls: ['./topic-series.page.scss'],
})
export class TopicSeriesPage {
  topic: string | null = null;
  seriesList = [
    {
      title: 'Angular Fundamentals',
      description: 'Learn Angular from scratch.',
      slug: 'angular-fundamentals',
    },
    {
      title: 'Advanced Angular',
      description: 'Deep dive into Angular.',
      slug: 'advanced-angular',
    },
  ];
  constructor(private route: ActivatedRoute) {
    this.topic = this.route.snapshot.paramMap.get('topic');
  }
}
