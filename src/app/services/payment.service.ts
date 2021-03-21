import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = "https://localhost:44393/api/"
  constructor(private HttpClient :HttpClient) { }

  add(payment:Payment){
    return this.HttpClient.post(this.apiUrl+"payments/add",payment)
  }
}
