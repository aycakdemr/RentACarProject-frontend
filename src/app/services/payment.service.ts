import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = "https://localhost:44393/api/"
  constructor(private HttpClient :HttpClient) { }


  add(payment:Payment):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"payments/add",payment)
  }
  getCardNumber(id:number):Observable<ListResponseModel<Payment>>{
    let newPath =this.apiUrl+"payments/getcardnumber?id="+id
    return this.HttpClient.get<ListResponseModel<Payment>>(newPath)

  }
  
}
