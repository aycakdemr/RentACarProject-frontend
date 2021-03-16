import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';
import { Image } from '../models/image';
import { CarService } from '../services/car.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-cardetails2',
  templateUrl: './cardetails2.component.html',
  styleUrls: ['./cardetails2.component.css']
})
export class Cardetails2Component implements OnInit {

  cars:Car[]=[];
  images : Image[]=[];
  ImagePaths: string[] = [];
  imageUrl = "https://localhost:44393/";
  currentCar?:Car;
  constructor(private carService : CarService,
    private activatedRoute:ActivatedRoute,
    private ImageService : ImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"] ){
       this.getCarsById(params["carId"])
       this.getImagesById(params["carId"])
      }
  })
  }

  setCurrentCar(car:Car){
    this.currentCar = car
  }
  getCarsById(Id:number){
    this.carService.getCarDetailsById(Id).subscribe(response =>{
      this.cars = response.data
      console.log(response)
    })
  }
  getImagesById(Id:number){
    this.ImageService.getImagesById(Id).subscribe(response =>{
      this.images = response.data
      console.log(response)
    })
  }


}
