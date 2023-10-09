import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandsDetailComponent } from './components/brands-detail/brands-detail.component';
import { ColorsDetailComponent } from './components/colors-detail/colors-detail.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { CarsDetailComponent } from './components/cars-detail/cars-detail.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/car/:carId', component: CarDetailComponent },
  { path: 'cars/brand/:brandId/color/:colorId', component: CarComponent },
  { path: 'cars/payment', component: PaymentComponent },

  { path: 'brands/list', component: BrandsDetailComponent },
  { path: 'brands/list/add', component: BrandAddComponent },
  { path: 'brands/list/update/:brandId', component: BrandUpdateComponent },
  { path: 'brands/list/delete/:brandId', component: BrandDeleteComponent },

  { path: 'colors/list', component: ColorsDetailComponent },
  { path: 'colors/list/add', component: ColorAddComponent },
  { path: 'colors/list/update/:colorId', component: ColorUpdateComponent },
  { path: 'colors/list/delete/:colorId', component: ColorDeleteComponent },

  { path: 'cars/list', component: CarsDetailComponent },
  { path: 'cars/list/add', component: CarAddComponent },
  { path: 'cars/list/update/:carId', component: CarUpdateComponent },
  { path: 'cars/list/delete/:carId', component: CarDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
