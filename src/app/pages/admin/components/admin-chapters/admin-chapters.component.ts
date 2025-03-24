import { Component } from '@angular/core';
import { AdminChaptersFormComponent } from '../admin-chapters-form/admin-chapters-form.component';

@Component({
  selector: 'app-admin-chapters',
  imports: [AdminChaptersFormComponent],
  templateUrl: './admin-chapters.component.html',
  styleUrl: './admin-chapters.component.scss'
})
export class AdminChaptersComponent {
  showTable = true;
  onChaptersDetailsAddClick(event: Event){
    this.showTable = !this.showTable;
  }
}
