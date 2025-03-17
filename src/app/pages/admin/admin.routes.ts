import { Route } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SeriesComponent } from './components/series/series/series.component';

export const adminRoutes: Route[] = [
  { path: '', component: AdminDashboardComponent },
  {
    path: 'series',
    component: SeriesComponent,
  },
];
