import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MytestSerService {

  constructor() { }

  mul(num1:number,num2:number){
    return num1*num2;
  }
}
