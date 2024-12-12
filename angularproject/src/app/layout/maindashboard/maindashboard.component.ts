import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-maindashboard',
  standalone: true,
  imports: [RouterOutlet,NavComponent,FooterComponent],
  templateUrl: './maindashboard.component.html',
  styleUrl: './maindashboard.component.css'
})
export class MaindashboardComponent {

}
