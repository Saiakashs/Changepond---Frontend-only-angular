import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(public _router:Router){}

  logOut(){
    window.alert("Logout Successfully");
    sessionStorage.clear();
    this._router.navigate(['/']);

  }
}
