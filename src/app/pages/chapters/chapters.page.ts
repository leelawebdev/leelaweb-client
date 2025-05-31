import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SafeUrlPipe } from './safe-url.pipe';

@Component({
  selector: 'app-chapters-page',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterLink, SafeUrlPipe],
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage {
  topicSlug: string | null = null;
  seriesSlug: string | null = null;

  // Mock series details
  seriesDetails = {
    title: 'Mastering Angular Fundamentals',
    description:
      'A complete guide to mastering Angular from basics to advanced concepts, including real-world projects and best practices.',
    author: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80',
  };

  chapters = [
    {
      title: 'Chapter 1: Getting Started',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Introduction to the series.',
      duration: '5:12',
      slug: 'chapter-1-getting-started',
    },
    {
      title: 'Chapter 2: Project Setup',
      video: 'https://www.youtube.com/embed/9bZkp7q19f0',
      description: 'Setting up your project.',
      duration: '8:34',
      slug: 'chapter-2-project-setup',
    },
    {
      title: 'Chapter 3: Core Concepts',
      video: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
      description: 'Understanding the basics.',
      duration: '12:20',
      slug: 'chapter-3-core-concepts',
    },
    {
      title: 'Chapter 4: Advanced Patterns',
      video: 'https://www.youtube.com/embed/L_jWHffIx5E',
      description: 'Diving deeper into advanced topics.',
      duration: '10:45',
      slug: 'chapter-4-advanced-patterns',
    },
    {
      title: 'Chapter 5: Testing',
      video: 'https://www.youtube.com/embed/tVj0ZTS4WF4',
      description: 'How to test your code.',
      duration: '7:50',
      slug: 'chapter-5-testing',
    },
    {
      title: 'Chapter 6: Deployment',
      video: 'https://www.youtube.com/embed/fJ9rUzIMcZQ',
      description: 'Deploying your application.',
      duration: '6:15',
      slug: 'chapter-6-deployment',
    },
    {
      title: 'Chapter 7: Performance',
      video: 'https://www.youtube.com/embed/ZZ5LpwO-An4',
      description: 'Optimizing for performance.',
      duration: '9:03',
      slug: 'chapter-7-performance',
    },
    {
      title: 'Chapter 8: Security',
      video: 'https://www.youtube.com/embed/OPf0YbXqDm0',
      description: 'Best practices for security.',
      duration: '11:27',
      slug: 'chapter-8-security',
    },
    {
      title: 'Chapter 9: Real World Example',
      video: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
      description: 'Applying what you learned.',
      duration: '13:02',
      slug: 'chapter-9-real-world-example',
    },
    {
      title: 'Chapter 10: Wrap Up',
      video: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
      description: 'Summary and next steps.',
      duration: '4:58',
      slug: 'chapter-10-wrap-up',
    },
  ];

  selectedChapterIndex = 0;

  get selectedChapter() {
    return this.chapters[this.selectedChapterIndex];
  }

  selectChapter(index: number) {
    this.selectedChapterIndex = index;
  }

  constructor(private route: ActivatedRoute) {
    const chapter = this.route.snapshot.paramMap.get('chapter');
    if (chapter) {
      const idx = this.chapters.findIndex((c) => c.slug === chapter);
      if (idx !== -1) this.selectedChapterIndex = idx;
    }
  }
}
