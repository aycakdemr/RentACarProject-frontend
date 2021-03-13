import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44393/api/customers/getcustomerdetail"
  constructor(private HttpClient :HttpClient) { }

  getCustomers() :Observable<CustomerResponseModel>{

    return this.HttpClient.get<CustomerResponseModel>(this.apiUrl);
    
  }
}