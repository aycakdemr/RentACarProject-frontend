import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44393/api/"
  constructor(private HttpClient :HttpClient) { }

  getCars() :Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getcardetail"
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
    
  }
  getCarsByBrand(brandId:number) :Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getbybrand?brandId="+brandId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
    
  }
  getCarsByColor(colorId:number) :Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getbycolor?colorId="+colorId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
    
  }
  getCarDetailsById(carId:number) :Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getbyid?carId="+carId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
    
  }
}
