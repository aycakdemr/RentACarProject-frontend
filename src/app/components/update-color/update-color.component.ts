import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'

import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-update-color',
  templateUrl: './update-color.component.html',
  styleUrls: ['./update-color.component.css']
})
export class UpdateColorComponent implements OnInit {

  colorUpdateForm:FormGroup
  color:Color
  colors:Color[] = [];
  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder,
    private coolorService:ColorService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
       this.getColorsById(params["colorId"])

      }
    this.createColorUpdateForm();

    
  })}
  getColors(){

    this.coolorService.getColors().subscribe(response =>{
      this.colors = response.data
    })
    
  }
  createColorUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      id:  ["", Validators.required],
      colorName:["",Validators.required],
    })
  }
  update(){
    this.colorUpdateForm.patchValue({
      id: this.color.id,
      
    })
    if(this.colorUpdateForm.valid){
      let colorModel = Object.assign({},this.colorUpdateForm.value)
      this.coolorService.update(colorModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  }
  getColorsById(id:number){
    this.coolorService.getColorsById(id).subscribe(response=>{
      this.color=response.data[0];
     
    })
  }

}
