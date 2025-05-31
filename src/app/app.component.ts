import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'leelawebdev_newclient';

  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      // On app load, set dark mode if user previously selected it
      const darkPref = localStorage.getItem('darkMode');
      if (darkPref === 'true') {
        document.documentElement.classList.add('dark');
      } else if (darkPref === 'false') {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  toggleDarkMode() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const html = document.documentElement;
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    }
  }
}
