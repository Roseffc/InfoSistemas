import { Component, OnInit } from '@angular/core';
import { CarsModel } from 'src/app/model/cars-model';
import { HomeService } from 'src/app/service/home-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService ) { }

  cars:any=[];

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.homeService.getCars()
      .subscribe((result)=> {
        this.cars = result
        console.log(result)
      });
  }

}
