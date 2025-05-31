import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar.component';

interface Chapter {
  title: string;
  slug: string;
  series: string;
  videoUrl: string;
}

@Component({
  selector: 'app-chapters-list',
  standalone: true,
  imports: [RouterModule, CommonModule, AdminSidebarComponent],
  templateUrl: './chapters-list.page.html',
  styleUrls: ['./chapters-list.page.scss'],
})
export class ChaptersListPage {
  chapters: Chapter[] = [
    {
      title: 'Intro to Angular',
      slug: 'intro-angular',
      series: 'Angular Fundamentals',
      videoUrl: 'https://youtu.be/angular1',
    },
    {
      title: 'React Basics',
      slug: 'react-basics',
      series: 'React Essentials',
      videoUrl: 'https://youtu.be/react1',
    },
    {
      title: 'Node.js Setup',
      slug: 'nodejs-setup',
      series: 'Node.js Crash Course',
      videoUrl: 'https://youtu.be/nodejs1',
    },
    {
      title: 'Docker Install',
      slug: 'docker-install',
      series: 'Docker for Devs',
      videoUrl: 'https://youtu.be/docker1',
    },
  ];

  constructor(private readonly router: Router) {}

  deleteChapter(slug: string) {
    this.chapters = this.chapters.filter((chapter) => chapter.slug !== slug);
  }
}
