import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44393/api/cars/getcardetail"
  constructor(private HttpClient :HttpClient) { }

  getCars() :Observable<CarResponseModel>{

    return this.HttpClient.get<CarResponseModel>(this.apiUrl);
    
  }
}
