import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44393/api/brands"
  constructor(private HttpClient :HttpClient) { }

  getBrands() :Observable<ListResponseModel<Brand>>{

    let newPath=this.apiUrl+"/getall"
    return this.HttpClient.get<ListResponseModel<Brand>>(newPath);
    
  }
  add(brand:Brand):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"/add",brand)
  }
  update(brand:Brand):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"/update",brand)
  }
  getBrandsById(id:number) :Observable<ListResponseModel<Brand>>{
    let newPath =this.apiUrl+"/getbyid?id="+id
    return this.HttpClient.get<ListResponseModel<Brand>>(newPath);
    
  }


}