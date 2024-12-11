import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcompoenent',
  standalone: true,
  imports: [],
  templateUrl: './childcompoenent.component.html',
  styleUrl: './childcompoenent.component.css'
})
export class ChildcompoenentComponent {

  @Input() pdata:any;


 @Output() eventObj=new EventEmitter();

  
  sendData(value:string){
    console.log(value);
    this.eventObj.emit(value);
  }

}
