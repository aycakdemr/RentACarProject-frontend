import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/carDto';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDto[], filterText:string): CarDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() :""

    return filterText ? value.filter((c:CarDto)=> 
    c.carDescription.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
