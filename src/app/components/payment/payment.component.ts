import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';
 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentAddForm :FormGroup;

  constructor(private formBuilder:FormBuilder,private paymentService:PaymentService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createPaymentAddForm() 
  }

  createPaymentAddForm(){
    this.paymentAddForm=this.formBuilder.group({
      cardNumber:["",Validators.required],
      expiryDate:["",Validators.required],
      securityCode:["",Validators.required],
      name:["",Validators.required],
      lastName:["",Validators.required]
    })
  }
  add(){
    if(this.paymentAddForm.valid){
      let paymentModel = Object.assign({},this.paymentAddForm.value)
      this.paymentService.add(paymentModel).subscribe(data=>{
        this.toastrService.success("Ödeme İşlemi Tamamlandı","Başarılı")
      },responseError=>{
        if(responseError.errors.Errors.length>0){
          for (let i = 0; i < responseError.errors.Errors.length; i++) {
            this.toastrService.error(responseError.errors.Errors[i].ErrorMessage,"Doğrulama Hatası")
            
          }
          
        }
      })
      
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
    
  }

  
}
