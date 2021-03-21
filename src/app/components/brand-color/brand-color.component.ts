import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-brand-color',
  templateUrl: './brand-color.component.html',
  styleUrls: ['./brand-color.component.css']
})
export class BrandColorComponent implements OnInit {

  brands:Brand[] = [];
  currentBrand?:Brand;
  colors:Color[] = [];
  currentColor :Color;
  filterText1 ="";
  filterText2="";
  constructor(private colorService:ColorService,
    private brandService: BrandService) { }

  ngOnInit(): void {
    this.getColors();
    this.getBrands();

  }

  getColors(){

    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data
    })
    
  }
  getBrands(){

    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data
    })
    
  }
  setCurrentColor(color:Color){
    this.currentColor=color;
  }
  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }
  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
