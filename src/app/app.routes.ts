import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { SeriesComponent } from './pages/series/series.component';
import { PathComponent } from './pages/path/path.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'path', component: PathComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent },
];
