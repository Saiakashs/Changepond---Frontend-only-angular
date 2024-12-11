import { Component } from '@angular/core';

@Component({
  selector: 'app-buttonimage',
  standalone: true,
  imports: [],
  templateUrl: './buttonimage.component.html',
  styleUrl: './buttonimage.component.css'
})
export class ButtonimageComponent {
  imgPath="../../assets/images/1_petra_jordan.jpeg";
  altName="Petra";
  imgName:string="Petra, Jordan";

  changeImage(value:number){

    if(value===1){
      this.imgPath= "../../assets/images/2_wall_china.jpg" 
      this.altName = "Wall Of China";
      this.imgName="Wall Of China, China";
  }
    
      if(value===2){
          this.imgPath= "../../assets/images/3_christ_redeemer_brazil.jpg" 
          this.altName = "Christ Redeemer";
          this.imgName="Christ Redeemer, Brazil";
      }
      else if(value===3){
          this.imgPath = "../../assets/images/4_colosseum_italy.jpeg" 
          this.altName = "Petra";
          this.imgName="Petra, Jordan";
      }
      else if(value===4){
          this.imgPath = "../../assets/images/1_petra_jordan.jpeg" 
          this.altName = "Petra";
          this.imgName="Petra, Jordan";
      }
}
}
