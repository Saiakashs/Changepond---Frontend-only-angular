import { Component } from '@angular/core';
import { commonImgPath } from '../shared/constant/constantData';
import { CommonModule } from '@angular/common';
import { ItemsserviceService } from '../shared/services/itemsservice.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  itemObj=new ItemsserviceService();

  myitems:any[]=[
    {name:"Lolipop",price:10,description:"Special Lolipop",imgPath:commonImgPath.lolipop},
    {name:"Wonders",price:10,description:"Special Wonders",imgPath:commonImgPath.wonders},
    {name:"Taj Mahal",price:10,description:"Special Taj Mahal",imgPath:commonImgPath.tajmahal},
    {name:"Wall",price:10,description:"Special Wall",imgPath:commonImgPath.wall},
    {name:"petra",price:10,description:"Special petra",imgPath:commonImgPath.petra}
  ]

}