import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  toggleNavBarClass = signal('');
  onNavbarToggle() {
    let toggleClassName = 'show';
    if (this.toggleNavBarClass() === 'show') {
      toggleClassName = '';
    }
    this.toggleNavBarClass.set(toggleClassName);
  }
}
