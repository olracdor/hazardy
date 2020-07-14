import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login.component';
import { NewWidgetModule } from '../../shared/pages/layout/new-widget/widget.module';
import { AlertModule } from 'ngx-bootstrap/alert';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NewWidgetModule,
    AlertModule.forRoot()
  ]
})
export class LoginModule {
  static routes = routes;
}
