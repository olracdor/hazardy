import { AppConfig } from '../../configs/app.config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

const jwt = new JwtHelperService();

@Injectable()
export class LoginService {
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

  isAuthenticated() {
    const token = localStorage.getItem('token');

    // We check if app runs with backend mode
    if (!this.config.isBackend && token) {
      return true;
    }
    if (!token) {
      return;
    }
    const date = new Date().getTime() / 1000;
    const data = jwt.decodeToken(token);
    return date < data.exp;
  }

  loginUser(creds) {

    this.requestLogin();
    if (creds.email.length > 0 && creds.password.length > 0) {
      this.http.post(`${this.config.baseURLApi}/v1/login`, creds).subscribe((res: any) => {
        const token = res.token;
        this.receiveToken(token);
      }, err => {
        this.loginError('Something was wrong. Try again');
      });

    } else {
      this.loginError('Something was wrong. Try again');
    }
  }

  receiveToken(token) {
    let user: any = {};
    user = jwt.decodeToken(token).user;
    delete user.id;


    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.receiveLogin();
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.router.navigate(['/login']);
  }

  loginError(payload) {
    this.isFetching = false;
    this.errorMessage = payload;
  }

  receiveLogin() {
    this.isFetching = false;
    this.errorMessage = '';
    this.router.navigate(['/app/home']);
  }

  requestLogin() {
    this.isFetching = true;
  }
}
