import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormatTitlePipe } from './pipe/format-title.pipe'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, FormatTitlePipe, HeaderComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
