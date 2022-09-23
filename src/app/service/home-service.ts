import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { carsMock } from '../mock/mock-cars';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor() { }

getCars() {
  return of(carsMock)
}

}
