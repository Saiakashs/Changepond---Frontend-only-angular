
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day1task3',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './day1task3.component.html',
  styleUrl: './day1task3.component.css'
})
export class Day1task3Component {

  bikes:string[]=[
    "Hero-Honda","KTM","Bullet","Bajaj","TVS","Yamaha"
  ]

  cars:string[]=[
    "BMW","Suziki","Ferrari","Rolls Royce","Ford","Kia"
  ]

  isCond1=true;
  displayData(value:any){
    if(value===2){
      this.isCond1=true;
    }
    else if(value===1){
      this.isCond1=false;
    }
  }

  bike:string="";
  car:string="";

  isCond2:boolean=true;

  getClickBike(value:any){
    this.bike=value;
    this.isCond2=false;
  }

  getClickCar(value:any){
    this.car=value;
    this.isCond2=true;
  }
  
 
}