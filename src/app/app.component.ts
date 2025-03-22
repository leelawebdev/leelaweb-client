import { Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule
  ],
})

export class AppComponent {
  title = 'leelaweb-client';
}
