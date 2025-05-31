import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar.component';

@Component({
  selector: 'app-topic-create',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './topic-create.page.html',
  styleUrls: ['./topic-create.page.scss'],
})
export class TopicCreatePage {
  topic = {
    name: '',
    slug: '',
    description: ''
  };

  constructor(private readonly router: Router) {}

  createTopic() {
    // Mock: Normally, you would call a service to save the topic
    // For now, just navigate back to the topics list
    this.router.navigate(['/admin/topics']);
  }

  cancel() {
    this.router.navigate(['/admin/topics']);
  }
}
