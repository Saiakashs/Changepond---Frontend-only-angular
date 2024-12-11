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

export const routes: Routes = [

    //default routing

    //{path:"",component:LoginComponent},

    //redirecting routing

    {path:"", redirectTo:"login", pathMatch:"full"},

    //naming routing

    {path:"login",component:LoginComponent},

    {path:"maindashboard",component:MaindashboardComponent,children:[
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
