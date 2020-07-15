import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
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
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ AppConfig,
    HomeService],
})
export class HomeModule {
  static routes = routes;
}
