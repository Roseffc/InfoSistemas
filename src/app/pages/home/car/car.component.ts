import { Component, OnInit, Input } from '@angular/core';
import { CarsModel } from 'src/app/model/cars-model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car!:CarsModel;

  constructor() { }

  ngOnInit() {
  }

}
