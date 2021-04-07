import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
import { Payment } from 'src/app/models/payment';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';
 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  isSaved: boolean = false
  id:number
  paymentAddForm :FormGroup;
  creditCardId: number;
  creditCards: Payment[] = [];
  constructor(private formBuilder:FormBuilder,private paymentService:PaymentService,
    private toastrService:ToastrService,private dialog:MatDialog,
    private localStorage:LocalStorageService,
    private userService:UserService) { }

  ngOnInit(): void {
    
    this.getCardNumberFromDatabase()
    this.getCards()
    this.createPaymentAddForm() 
  }

  createPaymentAddForm(){
    this.paymentAddForm=this.formBuilder.group({
      userId:[this.id,Validators.required],
      cardNumber:["",Validators.required],
      expiryDate:["",Validators.required],
      securityCode:["",Validators.required],

    })
  }
  add(){
    if(this.paymentAddForm.valid){
      let paymentModel = Object.assign({},this.paymentAddForm.value)
      
      this.paymentService.add(paymentModel).subscribe(data=>{
        if(!this.isSaved){
          this.openDialog().afterClosed().subscribe(response => {
            if(response) {
              this.addCardNumber(paymentModel)
            }
          })
        }
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
  openDialog() {
    let dialogConfig = new MatDialogConfig()
    return this.dialog.open(DialogExampleComponent,dialogConfig)
  }
  addCardNumber(payment : Payment){  
    this.paymentService.add(payment).subscribe(response => {
      this.toastrService.success(response.message)
    })
}
getCardNumberFromDatabase() {
  this.id = parseInt(this.localStorage.getItem("id")!!)
  console.log(this.id)
  this.paymentService.getCardNumber(this.id).subscribe(response => {
    if(response.data != null) {
      this.paymentAddForm.controls["cardNumber"].setValue(response.data)
      this.isSaved = true
    }
  })
}
getCards() {
  this.paymentService.getCardNumber(this.id).subscribe((response) => {
    if (response) {
      this.creditCards = response.data;
    }
  });
}
cardChange(event: any) {
  let selectedCard = this.creditCards.find((c) => c.id == this.creditCardId);
  this.paymentAddForm.get('cardNumber')?.setValue(selectedCard?.cardNumber);
  this.paymentAddForm
    .get('expiryDate')
    ?.setValue(selectedCard?.expiryDate);
  this.paymentAddForm
    .get('securityCode')
    ?.setValue(selectedCard?.securityCode);

}

  
}

  

