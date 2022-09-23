import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarsModel } from 'src/app/model/cars-model';
import { HomeService } from 'src/app/service/home-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private formBuider: FormBuilder) { }

  cars:any = [];
  carsFull: any = [];
  listBrand: string[] = [];

  formSearch!: FormGroup;

  ngOnInit() {
    this.getCars();
    this.setFormGroup();
    this.onChangeFormSearchQuery();
    this.onChangeFormSearchBrand();
  }

  setFormGroup() {
    this.formSearch = this.formBuider.group({
      query: [null],
      brand: []
    });
  }

  onChangeFormSearchQuery() {
    this.formSearch.get('query')?.valueChanges.subscribe(result => {
      this.cars = this.carsFull.filter((item: any) => {
        return Object.keys(item).some(key => {
          return String(item[key]).toLowerCase().includes(String(result).toLowerCase())
        })
      })
    })
  }

  onChangeFormSearchBrand() {
    this.formSearch.get('brand')?.valueChanges.subscribe(result => {
      this.cars = this.carsFull.filter((item: any) => item.marca.includes(result))
    })
  }

  getCars() {
    this.homeService.getCars()
      .subscribe((result) => {
        this.cars = result;
        this.carsFull = result;
        this.listBrand = this.removeItemsDuplicates(this.carsFull.map((item: any) => item.marca))
        console.log(this.listBrand)
      });
  }

  removeItemsDuplicates(list: string[]) {
    return list.filter((item, index, array) => array.indexOf(item) === index)
  }

}
