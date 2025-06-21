import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar.component';

@Component({
  selector: 'app-chapter-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './chapter-edit.page.html',
  styleUrls: ['./chapter-edit.page.scss'],
})
export class ChapterEditPage {
  chapter = {
    title: '',
    slug: '',
    series: '',
    videoUrl: ''
  };

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {
    // Mock: Load chapter by slug from route param
    const slug = this.route.snapshot.paramMap.get('slug');
    // In real app, fetch chapter from service
    if (slug === 'intro-angular') {
      this.chapter = { title: 'Intro to Angular', slug: 'intro-angular', series: 'Angular Fundamentals', videoUrl: 'https://youtu.be/angular1' };
    } else if (slug === 'react-basics') {
      this.chapter = { title: 'React Basics', slug: 'react-basics', series: 'React Essentials', videoUrl: 'https://youtu.be/react1' };
    } else if (slug === 'nodejs-setup') {
      this.chapter = { title: 'Node.js Setup', slug: 'nodejs-setup', series: 'Node.js Crash Course', videoUrl: 'https://youtu.be/nodejs1' };
    } else if (slug === 'docker-install') {
      this.chapter = { title: 'Docker Install', slug: 'docker-install', series: 'Docker for Devs', videoUrl: 'https://youtu.be/docker1' };
    }
  }

  saveChapter() {
    // Mock: Normally, you would call a service to save the chapter
    this.router.navigate(['/admin/chapters']);
  }

  cancel() {
    this.router.navigate(['/admin/chapters']);
  }
}
