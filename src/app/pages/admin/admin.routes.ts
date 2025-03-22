import { Route } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SeriesComponent } from '../admin/components/series/series/series.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminTopicsComponent } from './components/admin-topics/admin-topics.component';
import { AdminChaptersComponent } from './components/admin-chapters/admin-chapters.component';
import { AdminCategoriesFormComponent } from './components/admin-categories-form/admin-categories-form.component';
import { AdminSeriesFormComponent } from './components/admin-series-form/admin-series-form.component';
import { AdminTopicsFormComponent } from './components/admin-topics-form/admin-topics-form.component';
import { AdminChaptersFormComponent } from './components/admin-chapters-form/admin-chapters-form.component';

export const adminRoutes: Route[] = [
  { path: '', component: AdminDashboardComponent, children:[
    {path: 'categories', component: AdminCategoriesComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'topics', component: AdminTopicsComponent},
    {path: 'chapters', component: AdminChaptersComponent},
    {path: 'add-categories', component: AdminCategoriesFormComponent},
    {path: 'add-series', component: AdminSeriesFormComponent},
    {path: 'add-topics', component: AdminTopicsFormComponent},
    {path: 'add-chapters', component: AdminChaptersFormComponent}
  ]
},

];
