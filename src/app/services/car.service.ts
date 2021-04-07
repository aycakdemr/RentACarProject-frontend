import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44393/api/"
  constructor(private HttpClient :HttpClient) { }

  getCarsDetail() :Observable<ListResponseModel<CarDto>>{
    let newPath =this.apiUrl+"cars/getcardetail"
    return this.HttpClient.get<ListResponseModel<CarDto>>(newPath);
    
  }
  getCars() :Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getall"
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
    
  }
  getCarsByBrand(brandId:number) :Observable<ListResponseModel<CarDto>>{
    let newPath =this.apiUrl+"cars/getbybrand?brandId="+brandId
    return this.HttpClient.get<ListResponseModel<CarDto>>(newPath);
    
  }
  getCarsByColor(colorId:number) :Observable<ListResponseModel<CarDto>>{
    let newPath =this.apiUrl+"cars/getbycolor?colorId="+colorId
    return this.HttpClient.get<ListResponseModel<CarDto>>(newPath);
    
  }
  getCarDetailsById(carId:number) :Observable<ListResponseModel<CarDto>>{
    let newPath =this.apiUrl+"cars/getcardetailbyid?carId="+carId
    return this.HttpClient.get<ListResponseModel<CarDto>>(newPath);
    
  }
  getCarFiltered(brandId:number,colorId:number) :Observable<ListResponseModel<CarDto>>{
    let newPath =this.apiUrl+"cars/getbybrandandcolor?brandId="+brandId+"&colorId="+colorId
    return this.HttpClient.get<ListResponseModel<CarDto>>(newPath);
    
  }
  add(car:Car):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }
  update(car:Car):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"cars/update",car)
  }
  delete(id:number){
    let newPath =this.apiUrl+"cars/delete?id="+id
    return this.HttpClient.post(newPath,id);
  }
  getCarsById(id:number) :Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getbyid?carId="+id
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
    
  }

}
