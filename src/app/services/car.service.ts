import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://localhost:44398/api/';

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsById(carId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getbyid?id="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(carBrandId:number):Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getcarbybrandid?id="+carBrandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(carColorId:number):Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"cars/getcarbycolorid?id="+carColorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath =this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  
  getCarsDetailsId(carDetailId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath =this.apiUrl+"cars/getcardetailsid?id="+carDetailId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  
  getCarDetailsByBrandNameAndColorName(brandName: string,colorName: string):Observable<ListResponseModel<CarDetail>>{
    let newPath =this.apiUrl+"cars/getcardetailsbybrandnameandcolorname?brandName=" + brandName + "&colorName=" + colorName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(car: Car): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/add';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  delete(car: Car): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/delete';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  update(car: Car): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/update';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }


}
