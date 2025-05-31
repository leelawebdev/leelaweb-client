import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <aside
      class="w-full md:w-64 bg-indigo-50 dark:bg-indigo-900 rounded-xl shadow p-6 mb-8 md:mb-0"
    >
      <nav class="flex flex-col gap-3">
        <a
          [routerLink]="['/admin/users']"
          class="px-4 py-2 rounded text-indigo-700 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-800 font-medium transition"
          >Users</a
        >
        <a
          [routerLink]="['/admin/topics']"
          class="px-4 py-2 rounded text-indigo-700 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-800 font-medium transition"
          >Topics</a
        >
        <a
          [routerLink]="['/admin/series']"
          class="px-4 py-2 rounded text-indigo-700 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-800 font-medium transition"
          >Series</a
        >
        <a
          [routerLink]="['/admin/chapters']"
          class="px-4 py-2 rounded text-indigo-700 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-800 font-medium transition"
          >Chapters</a
        >
      </nav>
    </aside>
  `,
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent {}
