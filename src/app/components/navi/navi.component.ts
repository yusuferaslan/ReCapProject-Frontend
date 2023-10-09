import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent {
  constructor(private router: Router) {}

  CarList() {
    this.router.navigate(['cars/list']);
  }
  BrandList() {
    this.router.navigate(['brands/list']);
  }
  ColorList() {
    this.router.navigate(['colors/list']);
  }
}
