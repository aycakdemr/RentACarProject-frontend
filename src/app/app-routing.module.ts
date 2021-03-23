import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { Cardetails2Component } from './components/cardetails2/cardetails2.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { UpdateBrandComponent } from './components/update-brand/update-brand.component';
import { UpdateColorComponent } from './components/update-color/update-color.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:UpdateBrandComponent},
  {path:"cars/color/:colorId",component:UpdateColorComponent},
  {path:"customers",component:CustomerComponent},
  {path:"rentals",component:RentalComponent},
  {path:"cars/car/:carId",component:CardetailComponent},
  {path:"cars/cardetails",component:CardetailComponent},
  {path:"cars/cardetails2",component:Cardetails2Component},
  {path:"cars/cardetails2/:carId",component:Cardetails2Component},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/rental",component:PaymentComponent},
  {path:"cars/addbrand",component:AddBrandComponent},
  {path:"cars/addcolor",component:AddColorComponent},
  {path:"cars/addcar",component:AddCarComponent},
  {path:"cars/update/:carId",component:UpdateCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
