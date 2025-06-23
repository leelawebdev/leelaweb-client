import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from '../../../components/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage {
  category = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
  };

  imageFile: File | null = null;
  imagePreview: string | null = null;
  useFileUpload = false;
  originalImageUrl = '';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    // Mock: Load category by slug from route param
    const slug = this.route.snapshot.paramMap.get('slug');
    this.loadCategory(slug);
  }

  loadCategory(slug: string | null) {
    // Mock data - In real app, fetch category from service
    const mockCategories = [
      {
        id: 1,
        name: 'Web Development',
        slug: 'web-development',
        description: 'Learn modern web development technologies and frameworks',
        imageUrl: 'https://via.placeholder.com/150/0891b2/ffffff?text=Web+Dev',
      },
      {
        id: 2,
        name: 'Mobile Development',
        slug: 'mobile-development',
        description: 'Build mobile applications for iOS and Android platforms',
        imageUrl: 'https://via.placeholder.com/150/059669/ffffff?text=Mobile',
      },
      {
        id: 3,
        name: 'DevOps & Cloud',
        slug: 'devops-cloud',
        description: 'Master DevOps practices and cloud computing technologies',
        imageUrl: 'https://via.placeholder.com/150/7c3aed/ffffff?text=DevOps',
      },
      {
        id: 4,
        name: 'Data Science',
        slug: 'data-science',
        description:
          'Explore data analysis, machine learning, and AI technologies',
        imageUrl: '',
      },
    ];

    const foundCategory = mockCategories.find((cat) => cat.slug === slug);
    if (foundCategory) {
      this.category = { ...foundCategory };
      this.originalImageUrl = foundCategory.imageUrl || '';
      this.useFileUpload = !foundCategory.imageUrl;
    }
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.imageFile = target.files[0];

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(this.imageFile);
    }
  }

  removeImage() {
    this.imageFile = null;
    this.imagePreview = null;
    this.category.imageUrl = '';
  }

  toggleImageMethod() {
    this.useFileUpload = !this.useFileUpload;
    this.removeImage();
    if (!this.useFileUpload && this.originalImageUrl) {
      this.category.imageUrl = this.originalImageUrl;
    }
  }

  generateSlug() {
    this.category.name = this.category.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  saveCategory() {
    if (!this.category.name.trim() || !this.category.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    // Mock: Normally, you would call a service to update the category
    // Handle file upload here if imageFile exists
    console.log('Updating category:', this.category);
    console.log('Image file:', this.imageFile);

    this.router.navigate(['/admin/categories']);
  }

  cancel() {
    this.router.navigate(['/admin/categories']);
  }
}
