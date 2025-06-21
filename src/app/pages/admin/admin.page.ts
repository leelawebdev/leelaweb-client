import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar.component';

interface DashboardStats {
  totalCategories: number;
  totalTopics: number;
  totalSeries: number;
  totalChapters: number;
  activeUsers: number;
  totalViews: number;
  newUsersThisWeek: number;
  popularSeries: string;
}

interface RecentActivity {
  id: number;
  type: 'user' | 'content' | 'system';
  message: string;
  timestamp: Date;
  user?: string;
}

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterModule, AdminSidebarComponent, CommonModule, DatePipe],
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  stats: DashboardStats = {
    totalCategories: 5,
    totalTopics: 12,
    totalSeries: 8,
    totalChapters: 54,
    activeUsers: 27,
    totalViews: 1240,
    newUsersThisWeek: 8,
    popularSeries: 'Angular Fundamentals',
  };

  recentActivities: RecentActivity[] = [
    {
      id: 1,
      type: 'content',
      message: 'New chapter "Advanced Components" was published',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      user: 'Admin',
    },
    {
      id: 2,
      type: 'user',
      message: 'New user "john.doe@example.com" registered',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    },
    {
      id: 3,
      type: 'content',
      message: 'Series "React Basics" was updated',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      user: 'Admin',
    },
    {
      id: 4,
      type: 'system',
      message: 'Database backup completed successfully',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
  ];

  currentDate = new Date();

  ngOnInit() {
    // Load dashboard data
    this.loadDashboardStats();
  }

  private loadDashboardStats() {
    // In a real app, this would fetch data from a service
    console.log('Loading dashboard statistics...');
  }

  getActivityIcon(type: string): string {
    switch (type) {
      case 'user':
        return '👤';
      case 'content':
        return '📝';
      case 'system':
        return '⚙️';
      default:
        return '📋';
    }
  }

  getRelativeTime(date: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays === 1) return 'Yesterday';
    return `${diffInDays} days ago`;
  }
}
