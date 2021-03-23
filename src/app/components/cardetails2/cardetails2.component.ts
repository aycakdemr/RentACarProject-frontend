import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';
import { CarDto } from '../../models/carDto';
import { Image } from '../../models/image';
import { CarService } from '../../services/car.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-cardetails2',
  templateUrl: './cardetails2.component.html',
  styleUrls: ['./cardetails2.component.css'],
})
export class Cardetails2Component implements OnInit {
  gunFarki: number=0;
  car!: CarDto;
  brand!: Brand;
  color!: Color;
  DateTimeNow: Date = new Date();
  rentStartDate: Date = this.DateTimeNow;
  rentEndDate: Date = this.DateTimeNow;
  cars: CarDto[] = [];
  images: Image[] = [];
  ImagePaths: string[] = [];
  imageUrl = 'https://localhost:44393/';
  currentCar?: CarDto;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private ImageService: ImageService,
    private toastrService: ToastrService,
    private rentalService: RentalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsById(params['carId']);
        this.getImagesById(params['carId']);
        this.getDiffBetweenDays();
      }
      
    });
  }

  setCurrentCar(car: CarDto) {
    this.currentCar = car;
  }
  getCarsById(Id: number) {
    this.carService.getCarDetailsById(Id).subscribe((response) => {
      this.cars = response.data;
      console.log(response);
    });
  }
  getImagesById(Id: number) {
    this.ImageService.getImagesById(Id).subscribe((response) => {
      this.images = response.data;
      console.log(response);
    });
  }
  rentCar(id: number) {
    let rental: Rental = {
      carId: id,
      customerId: 1003, // Test
      rentStartDate: new Date(this.rentStartDate),
      rentEndDate: new Date(this.rentEndDate),
      returnDate: undefined,
    };
    this.rentalService.add(rental).subscribe((response) => {
      this.toastrService.info('Ödeme Sayfasına Yönlendiriliyorsunuz');
    });
  }

  getDiffBetweenDays() {
    var date1 = new Date(this.rentStartDate.toString());
    var date2 = new Date(this.rentEndDate.toString());
    var difference = date2.getTime() - date1.getTime();
    var gunFarki = Math.ceil(difference / (1000 * 3600 * 24)); 
  }
}
