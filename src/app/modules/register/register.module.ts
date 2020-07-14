import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/register.component';
import { NewWidgetModule } from '../../shared/pages/layout/new-widget/widget.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RegisterService } from './register.service';

export const routes = [
  { path: '', component: RegisterComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NewWidgetModule,
    AlertModule.forRoot()
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule {
  static routes = routes;
}
