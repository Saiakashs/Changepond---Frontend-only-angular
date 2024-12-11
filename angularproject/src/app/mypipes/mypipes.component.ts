import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubePipe } from '../shared/customPipe/cube.pipe';
import { SquarePipe } from '../shared/customPipe/square.pipe';


@Component({
  selector: 'app-mypipes',
  standalone: true,
  imports: [CommonModule,CubePipe,SquarePipe],
  templateUrl: './mypipes.component.html',
  styleUrl: './mypipes.component.css'
})
export class MypipesComponent {
  msg:string="Welcome You All In Angular Session.We gonna learn Pipes Concept";

  emp={
    id:11,
    name:"Akash",
    salary:100000
  }

  dateObj=new Date();
}
