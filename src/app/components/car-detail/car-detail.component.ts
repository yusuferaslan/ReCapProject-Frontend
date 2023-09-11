import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImageDetail } from 'src/app/models/carImageDetail';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  currentCarDetail: CarDetail | null = null;
  dataLoaded = false;
  imageUrl = 'https://localhost:44398/uploads/images/';
  carImageDetail: CarImageDetail[] = [];

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsDetailsId(params['carId']);
        this.getCarImagesByCarId(params['carId']);
      }
    });
  }

  getCarsDetailsId(carDetailId: number) {
    this.carService.getCarsDetailsId(carDetailId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImageDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getImagePath(carImageDetail:CarImageDetail){
    let imagePath = this.imageUrl+carImageDetail.imagePath
    return imagePath
  }
}
