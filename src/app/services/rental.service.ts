import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44393/api/"
  constructor(private HttpClient :HttpClient) { }

  getRentals() :Observable<ListResponseModel<RentalDto>>{

    let newPath =this.apiUrl+"rentals/getrentaldetail"
    return this.HttpClient.get<ListResponseModel<RentalDto>>(newPath);
    
  }
  
  add(rental: Rental): Observable<ResponseModel> {
    let newPath =this.apiUrl+"rentals/add"
    return this.HttpClient.post<ResponseModel>(newPath,rental);
}
}