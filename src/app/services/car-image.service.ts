import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImageDetail } from '../models/carImageDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://localhost:44398/api/';

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImageDetail>> {
    let newPath = this.apiUrl + 'CarImages/getbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImageDetail>>(newPath);
  }
}
