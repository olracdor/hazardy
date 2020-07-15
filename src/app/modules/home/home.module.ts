import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HomeService } from './home.service';
import { AppConfig } from '../../config/app.config';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatTable,
    MatPaginator,
    MatSort,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ AppConfig,
    HomeService],
})
export class HomeModule {
  static routes = routes;
}
