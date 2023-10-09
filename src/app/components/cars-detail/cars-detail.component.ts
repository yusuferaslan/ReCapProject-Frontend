import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.getCarsDetails();
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
}
