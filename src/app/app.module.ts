import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginService} from './modules/login/login.service';
import {AppGuard} from './app.guard';
import { AppConfig } from './config/app.config';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ AppConfig,
    LoginService,
    AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
