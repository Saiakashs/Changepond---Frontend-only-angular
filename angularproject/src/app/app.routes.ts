import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { AngformComponent } from './forms/angform/angform.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { ParentcompoenentComponent } from './parentcompoenent/parentcompoenent.component';
import { ItemComponent } from './item/item.component';
import { ProductDashComponent } from './crud/product-dash/product-dash.component';
import { ProductAddComponent } from './crud/product-add/product-add.component';
import { ProductEditComponent } from './crud/product-edit/product-edit.component';

export const routes: Routes = [

    //default routing

    //{path:"",component:LoginComponent},

    //redirecting routing

    {path:"", redirectTo:"login", pathMatch:"full"},

    //naming routing

    {path:"login",component:LoginComponent},

    {path:"maindashboard",component:MaindashboardComponent,children:[

        {path:"productdash",component:ProductDashComponent},
        {path:"productadd",component:ProductAddComponent},
        {path:"productedit/:id",component:ProductEditComponent},

        {path:"items",component:ItemComponent},
        {path:"parent",component:ParentcompoenentComponent},
        {path:"databinding",component:DatabindingComponent},

        //parameterized routing

        {path:"mypipe/:id",component:MypipesComponent},

        //child routing

        {path:"angform",component:AngformComponent,children:[
            {path:"utdf",component:UtdfComponent},
            {path:"rtf",component:RtfComponent}
        ]},
    ]},

    

    //wild card routing

    {path:"**",component:PagenotfoundComponent},
];
