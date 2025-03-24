import { Component } from '@angular/core';
import { AdminTopicsFormComponent } from '../admin-topics-form/admin-topics-form.component';

@Component({
  selector: 'app-admin-topics',
  imports: [AdminTopicsFormComponent],
  templateUrl: './admin-topics.component.html',
  styleUrl: './admin-topics.component.scss'
})
export class AdminTopicsComponent {
  showTable = true;
  onTopicsDetailsAddClick($event: Event){
    this.showTable = !this.showTable;
  }
}
