import { Component } from '@angular/core';
//import { CardDetailsComponent } from '../../components/shared/card-details/card-details.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-topics',
  imports: [NgIf],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {
  activeTab = 'all'; // Default active tab
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
