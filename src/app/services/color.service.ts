import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://localhost:44398/api/Colors/';

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'getall'
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getColorById(colorId: number): Observable<SingleResponseModel<Color>> {
    let newPath = this.apiUrl + 'getbyid?id=' + colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }

  add(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, color);
  }

  delete(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'delete';
    return this.httpClient.post<ResponseModel>(newPath, color);
  }

  update(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<ResponseModel>(newPath, color);
  }

}
