import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-dash',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-dash.component.html',
  styleUrl: './product-dash.component.css'
})
export class ProductDashComponent {

  productArray:any;

  constructor(public dbobj:DbserviceService){}  //dependency injection

  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    this.dbobj.getRecord("products").subscribe((res:any)=>{
      console.log(res);
      this.productArray=res;
    })
  }
  
  deleteData(id:any,name:any){
    if(window.confirm(`Are you sure want to delete product with name:${name}`)==true){
      this.dbobj.deleteRecord("products",id).subscribe((res:any)=>{
        //console.log(res);
        window.alert("Product Deleted Successfully")
        this.fetchData();
      })
    }
    
  }
}
