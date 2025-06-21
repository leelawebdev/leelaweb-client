import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar.component';

@Component({
  selector: 'app-chapter-create',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './chapter-create.page.html',
  styleUrls: ['./chapter-create.page.scss'],
})
export class ChapterCreatePage {
  chapter = {
    title: '',
    slug: '',
    series: '',
    videoUrl: ''
  };

  constructor(private readonly router: Router) {}

  createChapter() {
    // Mock: Normally, you would call a service to save the chapter
    this.router.navigate(['/admin/chapters']);
  }

  cancel() {
    this.router.navigate(['/admin/chapters']);
  }
}
