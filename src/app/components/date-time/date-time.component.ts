import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent implements OnInit {
  rentDate: number;
  returnDate: number;
  gunFarki:number;
  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {}

  showMessage() {
    this.toastrService.success('Ödeme Sistemine Yönlendiriliyorsunuz..');
  }
  getDiffBetweenDays(x:number,y:number) {

    return Math.round((y- x) / (1000 * 60 * 60 * 24));  

  }
}
