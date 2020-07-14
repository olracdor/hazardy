import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, PreloadAllModules,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppConfig } from './configs/app.config';
import {LoginService} from './modules/login/login.service';
import {AppGuard} from './core/app.guard';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AppConfig,
    LoginService,
    AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
