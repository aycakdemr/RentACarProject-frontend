import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { Cardetails2Component } from './components/cardetails2/cardetails2.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"customers",component:CustomerComponent},
  {path:"rentals",component:RentalComponent},
  {path:"cars/car/:carId",component:CardetailComponent},
  {path:"cars/cardetails",component:CardetailComponent},
  {path:"cars/cardetails2",component:Cardetails2Component},
  {path:"cars/cardetails2/:carId",component:Cardetails2Component},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/rental",component:PaymentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
