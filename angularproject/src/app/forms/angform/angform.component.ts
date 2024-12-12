import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-angform',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './angform.component.html',
  styleUrl: './angform.component.css'
})
export class AngformComponent {

}
