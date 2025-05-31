import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar.component';

interface Topic {
  name: string;
  slug: string;
  description: string;
}

@Component({
  selector: 'app-topics-list',
  standalone: true,
  imports: [RouterModule, CommonModule, AdminSidebarComponent],
  templateUrl: './topics-list.page.html',
  styleUrls: ['./topics-list.page.scss'],
})
export class TopicsListPage {
  topics: Topic[] = [
    { name: 'Angular', slug: 'angular', description: 'Build scalable web apps with Angular.' },
    { name: 'React', slug: 'react', description: 'Build UIs with React.' },
    { name: 'Node.js', slug: 'nodejs', description: 'Server-side JavaScript with Node.js.' },
    { name: 'Docker', slug: 'docker', description: 'Containerize your applications with Docker.' },
  ];

  constructor(private readonly router: Router) {}

  deleteTopic(slug: string) {
    this.topics = this.topics.filter(topic => topic.slug !== slug);
  }
}
