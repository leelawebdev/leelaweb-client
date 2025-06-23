import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../../../components/admin-sidebar/admin-sidebar.component';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
  createdAt: Date;
}

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [RouterModule, CommonModule, AdminSidebarComponent],
  templateUrl: './categories-list.page.html',
  styleUrls: ['./categories-list.page.scss'],
})
export class CategoriesListPage {
  categories: Category[] = [
    {
      id: 1,
      name: 'Web Development',
      slug: 'web-development',
      description: 'Learn modern web development technologies and frameworks',
      imageUrl: 'https://via.placeholder.com/150/0891b2/ffffff?text=Web+Dev',
      createdAt: new Date('2025-01-15'),
    },
    {
      id: 2,
      name: 'Mobile Development',
      slug: 'mobile-development',
      description: 'Build mobile applications for iOS and Android platforms',
      imageUrl: 'https://via.placeholder.com/150/059669/ffffff?text=Mobile',
      createdAt: new Date('2025-02-01'),
    },
    {
      id: 3,
      name: 'DevOps & Cloud',
      slug: 'devops-cloud',
      description: 'Master DevOps practices and cloud computing technologies',
      imageUrl: 'https://via.placeholder.com/150/7c3aed/ffffff?text=DevOps',
      createdAt: new Date('2025-02-10'),
    },
    {
      id: 4,
      name: 'Data Science',
      slug: 'data-science',
      description:
        'Explore data analysis, machine learning, and AI technologies',
      createdAt: new Date('2025-02-15'),
    },
  ];

  constructor(private readonly router: Router) {}

  deleteCategory(id: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categories = this.categories.filter(
        (category) => category.id !== id
      );
    }
  }

  editCategory(slug: string) {
    this.router.navigate(['/admin/categories', slug, 'edit']);
  }
}
