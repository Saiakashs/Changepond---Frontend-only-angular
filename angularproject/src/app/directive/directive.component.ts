import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  isCond1:boolean=true;
  isCond2:boolean=false;

  isCond3:boolean=!true;

  courses:string[]=["HTML","CSS","Javascript","Typescript","React","Angular"];

  myCourse:string="Angular";

  myStyle={
    color:!this.isCond1?"red":"green",
    backgroundColor:this.isCond2?"aqua":"yellow",
    fontSize:this.isCond3?"25px":"30px",
  }

  myClass={
    txtPrimary:this.isCond1,
    txtDanger:this.isCond2,
    special:!this.isCond3
  }
}
