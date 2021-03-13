import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44393/api/colors/getall"
  constructor(private HttpClient :HttpClient) { }

  getColors() :Observable<ColorResponseModel>{

    return this.HttpClient.get<ColorResponseModel>(this.apiUrl);
    
  }
}