import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDto } from 'src/app/models/carDto';
import { Color } from 'src/app/models/color';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

 
  rentals:RentalDto[] = [];
  dataLoaded =false;
  constructor(private rentalService : RentalService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRentals();
  } 

  getRentals(){

    this.rentalService.getRentals().subscribe(response =>{
      this.rentals = response.data
      this.dataLoaded =true
    })
    
  }
  
}