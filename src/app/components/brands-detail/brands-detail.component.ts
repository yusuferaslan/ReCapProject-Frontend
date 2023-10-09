import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-detail',
  templateUrl: './brands-detail.component.html',
  styleUrls: ['./brands-detail.component.css'],
})
export class BrandsDetailComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
}
