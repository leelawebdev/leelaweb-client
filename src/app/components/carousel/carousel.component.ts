import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() featuredCourses: any[] = [];
  carouselIndex = 0;

  prevCourse() {
    if (this.carouselIndex === 0) {
      this.carouselIndex = this.featuredCourses.length - 1;
    } else {
      this.carouselIndex--;
    }
  }

  nextCourse() {
    if (this.carouselIndex === this.featuredCourses.length - 1) {
      this.carouselIndex = 0;
    } else {
      this.carouselIndex++;
    }
  }
}
