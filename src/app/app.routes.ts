import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.page').then((m) => m.LandingPage),
  },
  {
    path: 'topics',
    loadComponent: () =>
      import('./pages/topics/topics.page').then((m) => m.TopicsPage),
  },
  {
    path: 'topics/:topic',
    loadComponent: () =>
      import('./pages/topic-series/topic-series.page').then(
        (m) => m.TopicSeriesPage
      ),
  },
  {
    path: 'series',
    loadComponent: () =>
      import('./pages/all-series/all-series.page').then((m) => m.AllSeriesPage),
  },
  {
    path: 'series/:series',
    loadComponent: () =>
      import('./pages/series-chapters/series-chapters.page').then(
        (m) => m.SeriesChaptersPage
      ),
  },
  {
    path: 'chapters/:chapter',
    loadComponent: () =>
      import('./pages/chapters/chapters.page').then((m) => m.ChaptersPage),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./pages/signin/signin.page').then((m) => m.SigninPage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup.page').then((m) => m.SignupPage),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.page').then((m) => m.AdminPage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/users',
    loadComponent: () =>
      import('./pages/admin/users/users-list.page').then(
        (m) => m.UsersListPage
      ),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/users/create',
    loadComponent: () =>
      import('./pages/admin/users/user-create.page').then(
        (m) => m.UserCreatePage
      ),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/users/:id',
    loadComponent: () =>
      import('./pages/admin/users/user-view.page').then((m) => m.UserViewPage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/users/:id/edit',
    loadComponent: () =>
      import('./pages/admin/users/user-edit.page').then((m) => m.UserEditPage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/topics',
    loadComponent: () =>
      import('./pages/admin/topics-list.page').then((m) => m.TopicsListPage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/topics/create',
    loadComponent: () =>
      import('./pages/admin/topic-create.page').then((m) => m.TopicCreatePage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/topics/:slug/edit',
    loadComponent: () =>
      import('./pages/admin/topic-edit.page').then((m) => m.TopicEditPage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/series',
    loadComponent: () =>
      import('./pages/admin/series-list.page').then((m) => m.SeriesListPage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/series/create',
    loadComponent: () =>
      import('./pages/admin/series-create.page').then((m) => m.SeriesCreatePage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/series/:slug/edit',
    loadComponent: () =>
      import('./pages/admin/series-edit.page').then((m) => m.SeriesEditPage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/chapters',
    loadComponent: () =>
      import('./pages/admin/chapters-list.page').then((m) => m.ChaptersListPage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/chapters/create',
    loadComponent: () =>
      import('./pages/admin/chapter-create.page').then((m) => m.ChapterCreatePage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
  {
    path: 'admin/chapters/:slug/edit',
    loadComponent: () =>
      import('./pages/admin/chapter-edit.page').then((m) => m.ChapterEditPage),
    canActivate: [
      () => {
        if (typeof window === 'undefined') return false; // SSR guard
        const user = window.localStorage?.getItem('userRole');
        return user === 'superadmin';
      },
    ],
  },
];
