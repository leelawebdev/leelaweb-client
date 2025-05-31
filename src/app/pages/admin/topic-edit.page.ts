import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar.component';

@Component({
  selector: 'app-topic-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './topic-edit.page.html',
  styleUrls: ['./topic-edit.page.scss'],
})
export class TopicEditPage {
  topic = {
    name: '',
    slug: '',
    description: ''
  };

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {
    // Mock: Load topic by slug from route param
    const slug = this.route.snapshot.paramMap.get('slug');
    // In real app, fetch topic from service
    if (slug === 'angular') {
      this.topic = { name: 'Angular', slug: 'angular', description: 'Build scalable web apps with Angular.' };
    } else if (slug === 'react') {
      this.topic = { name: 'React', slug: 'react', description: 'Build UIs with React.' };
    } else if (slug === 'nodejs') {
      this.topic = { name: 'Node.js', slug: 'nodejs', description: 'Server-side JavaScript with Node.js.' };
    } else if (slug === 'docker') {
      this.topic = { name: 'Docker', slug: 'docker', description: 'Containerize your applications with Docker.' };
    }
  }

  saveTopic() {
    // Mock: Normally, you would call a service to save the topic
    this.router.navigate(['/admin/topics']);
  }

  cancel() {
    this.router.navigate(['/admin/topics']);
  }
}
