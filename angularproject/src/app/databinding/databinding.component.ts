import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  myName:string="Sai Kutthalingam S";

  imgPath:string="../../assets/images/1_petra_jordan.jpeg";
  imgName:string="Petra";

  inputData:string="lolipop";


  greeting(name:string){
    window.alert(`Good Morning ${name}`);
  }
}
