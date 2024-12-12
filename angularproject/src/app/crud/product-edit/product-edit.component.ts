import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {

  id:any;
  productData:any;

  constructor(public _actRoute:ActivatedRoute, public _dbObj:DbserviceService, private _router:Router){}



  ngOnInit(){
    this._actRoute.params.subscribe((param:any)=>{
      this.id=param.id;
      
      this._dbObj.getSingleRecord("products",this.id).subscribe((res:any)=>{
        //console.log(res);

        this.productData={...res};
      })
    })
  }

  editData(value:any){
    this._dbObj.editrecord("products",this.id,value).subscribe(()=>{
      window.alert("Product Updated Successfully");
      this._router.navigate(["/maindashboard/productdash"])
    })
  }


  
}
