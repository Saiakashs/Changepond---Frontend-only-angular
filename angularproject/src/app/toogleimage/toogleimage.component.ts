import { Component } from '@angular/core';

@Component({
  selector: 'app-toogleimage',
  standalone: true,
  imports: [],
  templateUrl: './toogleimage.component.html',
  styleUrl: './toogleimage.component.css'
})
export class ToogleimageComponent {
  buttonCount:number=0;
  imgPath="../../assets/images/1_petra_jordan.jpeg";
  altName="Petra";
  imgName:string="Petra, Jordan";

  changeImage(){
      // let text=document.getElementById("p1");
      this.buttonCount=this.buttonCount+1;
      //console.log(this.buttonCount);
      if(this.buttonCount%2!=0){
          this.imgPath= "../../assets/images/2_wall_china.jpg" 
          this.altName = "Wall Of China";
          this.imgName="Wall Of China";
      }
      else{
          this.imgPath = "../../assets/images/1_petra_jordan.jpeg" 
          this.altName = "Petra";
          this.imgName="Petra, Jordan";
      }
       
      
}
}
