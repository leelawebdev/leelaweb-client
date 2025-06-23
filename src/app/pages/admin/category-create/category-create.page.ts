import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from '../../../components/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, AdminSidebarComponent],
  templateUrl: './category-create.page.html',
  styleUrls: ['./category-create.page.scss'],
})
export class CategoryCreatePage {
  category = {
    name: '',
    description: '',
    imageUrl: '',
  };

  imageFile: File | null = null;
  imagePreview: string | null = null;
  useFileUpload = true;

  constructor(private readonly router: Router) {}

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
  }

  generateSlug() {
    this.category.name = this.category.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  createCategory() {
    if (!this.category.name.trim() || !this.category.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    // Mock: Normally, you would call a service to save the category
    // Handle file upload here if imageFile exists
    console.log('Creating category:', this.category);
    console.log('Image file:', this.imageFile);

    this.router.navigate(['/admin/categories']);
  }

  cancel() {
    this.router.navigate(['/admin/categories']);
  }
}
