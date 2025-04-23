import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormatTitlePipe } from '../pipe/format-title.pipe'; 

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet, FormatTitlePipe],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'tp01_ANGULAR_ePsi';
}
