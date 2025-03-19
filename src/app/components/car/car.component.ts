import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ICar } from '../../interfaces/car';
import { CarApiService } from '../../services/car-api.service';

@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  @Input() carData?:ICar;
  @Output() carDeletedEvent = new EventEmitter<string>();

  carImageWidth: number = 300;

  constructor(private _carAPIService: CarApiService) {}

  deleteCar(carId:string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });

    this.carDeletedEvent.emit("car got deleted");
  }

}
