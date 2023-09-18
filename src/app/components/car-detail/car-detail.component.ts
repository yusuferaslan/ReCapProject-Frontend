import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImageDetail } from 'src/app/models/carImageDetail';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

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
  rentalMessage: string = '';
  rentDate: Date | null = null;
  returnDate: Date | null = null;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private rentalService: RentalService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsDetailsId(params['carId']);
        this.getCarImagesByCarId(params['carId']);
        this.getCheckRentalCarId(params['carId']);
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

  getImagePath(carImageDetail: CarImageDetail) {
    let imagePath = this.imageUrl + carImageDetail.imagePath;
    return imagePath;
  }

  getCheckRentalCarId(carId: number) {
    this.rentalService.getCheckRentalCarId(carId).subscribe((response) => {
      this.rentalMessage = response.message;
      this.toastrService.info(response.message);
    });
  }
}
