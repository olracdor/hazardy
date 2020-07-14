

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ROUTES } from './layout.routes';

import { LayoutComponent } from './layout.component';


import {LoadingBarModule} from "ngx-loading-bar";
import {HelperComponent} from './helper/helper.component';
import {NewWidgetModule} from './new-widget/widget.module';
import {HelperService} from './helper/helper.service';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ROUTES,
    FormsModule,
    LoadingBarModule,
    NewWidgetModule
  ],
  declarations: [
    LayoutComponent,
    HelperComponent
  ],
  providers: [
    HelperService
  ]
})
export class LayoutModule {
}
