import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'

import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import { CarDto } from 'src/app/models/carDto';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  carUpdateForm:FormGroup
  car:Car
  cars:Car[] = [];
  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder,
    private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
       this.getCarsById(params["carId"])
      }
      this.createCarAddForm();
    })
    

  }
  createCarAddForm(){
    this.carUpdateForm = this.formBuilder.group({
      
      id:  ["", Validators.required],
      colorId:["",Validators.required],
      brandId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
      findeks:["",Validators.required],
    })
  }
  update(){
    this.carUpdateForm.patchValue({
      id: this.car.id,
      
    })
    if(this.carUpdateForm.valid){
      let colorModel = Object.assign({},this.carUpdateForm.value)
      console.log(colorModel)
      this.carService.update(colorModel).subscribe(response=>{

        this.toastrService.success(response.message,"Başarılı")
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  }
  getCarsById(id:number){
    this.carService.getCarsById(id).subscribe(response=>{
      this.car=response.data[0];
      console.log(this.car)
    })
  }

}
