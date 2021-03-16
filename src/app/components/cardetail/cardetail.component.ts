import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cars:Car[]=[];
  images : Image[]=[];
  ImagePaths: string[] = [];
  imageUrl = "https://localhost:44393/";

  constructor(private carService : CarService,
    private activatedRoute:ActivatedRoute,
    private ImageService : ImageService) { }

  ngOnInit(): void {
    this.getCars()
    this.getImages();
}
getCars(){

  this.carService.getCars().subscribe(response =>{
    this.cars = response.data
  })
  
}
getImages(){
  this.ImageService.getAll().subscribe(response =>{
    this.images = response.data
  })
}
  

}
