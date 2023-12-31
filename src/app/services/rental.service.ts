import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://localhost:44398/api/Rentals/';

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath =this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getCheckRentalCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath =this.apiUrl+"checkrentalcarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

}
