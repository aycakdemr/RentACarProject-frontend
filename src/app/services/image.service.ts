import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = "https://localhost:44393/api/"
  constructor(private HttpClient :HttpClient) { }

  getAll() :Observable<ListResponseModel<Image>>{
    let newPath =this.apiUrl+"carimages/getall"
    return this.HttpClient.get<ListResponseModel<Image>>(newPath);
    
  }
  getImagesById(carId:number) :Observable<ListResponseModel<Image>>{
    let newPath =this.apiUrl+"carimages/getimagesbyid?carId="+carId
    return this.HttpClient.get<ListResponseModel<Image>>(newPath);
    
  }
}
