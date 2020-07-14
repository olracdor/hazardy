import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VehicleComponent } from './pages/vehicles.component';

export const routes = [
  { path: '', component: VehicleComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class VehicleModule {
  static routes = routes;
}
