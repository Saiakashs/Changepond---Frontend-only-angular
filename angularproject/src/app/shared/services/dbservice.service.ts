import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  baseURL:string="http://localhost:8888"
  constructor(public httpObj:HttpClient) { }

  //code for get request

  getRecord(tableName:any){
    return this.httpObj.get(`${this.baseURL}/${tableName}`);
  }

  //code for delete request

  deleteRecord(tableName:any,id:any){
    return this.httpObj.delete(`${this.baseURL}/${tableName}/${id}`);
  }

  //code for put request

  editrecord(tableName:any,id:any,body:any){
    return this.httpObj.put(`${this.baseURL}/${tableName}/${id}`,body);
  }

  //code for add request

  addRecord(tableName:any,body:any){
    return this.httpObj.post(`${this.baseURL}/${tableName}`,body);
  }

  //code for getting single record

  
  getSingleRecord(tableName:any,id:any){
    return this.httpObj.get(`${this.baseURL}/${tableName}/${id}`);
  }
}
