import { AppConfig } from '../../configs/app.config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

const jwt = new JwtHelperService();

@Injectable()
export class VehicleService {
  config: any;
  _isFetching: boolean = false;
  _errorMessage: string = '';

  constructor(
    appConfig: AppConfig,
    private http: HttpClient,
    private router: Router,
  ) {
    this.config = appConfig.getConfig();
  }

  get isFetching() {
    return this._isFetching;
  }

  set isFetching(val: boolean) {
    this._isFetching = val;
  }

  get errorMessage() {
    return this._errorMessage;
  }

  set errorMessage(val: string) {
    this._errorMessage = val;
  }

  fetchMoreVehicles() {

    this.http.get('/v1/vehicles', creds).subscribe((res: any) => {
      const token = res.token;
      this.receiveToken(token);
    }, err => {
      this.loginError('Something was wrong. Try again');
    });
  }
}
