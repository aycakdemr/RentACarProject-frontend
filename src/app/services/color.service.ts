import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44393/api/colors"
  constructor(private HttpClient :HttpClient) { }

  getColors() :Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"/getall"
    return this.HttpClient.get<ListResponseModel<Color>>(newPath);
    
  }
  add(color:Color):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"/add",color)
  }
  update(color:Color):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"/update",color)
  }
  getColorsById(id:number) :Observable<ListResponseModel<Color>>{
    let newPath =this.apiUrl+"/getbyid?id="+id
    return this.HttpClient.get<ListResponseModel<Color>>(newPath);
    
  }
}