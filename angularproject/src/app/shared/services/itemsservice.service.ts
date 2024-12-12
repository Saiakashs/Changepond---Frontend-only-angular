import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsserviceService {

  constructor() { }

  welcome(para:any,comp:any){
    window.alert(`Welcome You ${para} in ${comp}`);
  }
}
