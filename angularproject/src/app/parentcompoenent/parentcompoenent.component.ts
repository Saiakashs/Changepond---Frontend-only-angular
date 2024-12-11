import { Component } from '@angular/core';
import { ChildcompoenentComponent } from '../childcompoenent/childcompoenent.component';
@Component({
  selector: 'app-parentcompoenent',
  standalone: true,
  imports: [ChildcompoenentComponent],
  templateUrl: './parentcompoenent.component.html',
  styleUrl: './parentcompoenent.component.css'
})
export class ParentcompoenentComponent {

  parentData:any;

  childData:any;

  sendData(value:string){
    console.log(value);

    this.parentData=value;
  }
}
