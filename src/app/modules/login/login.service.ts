import { AppConfig } from '../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {
    config: any;
    baseURLApi: any;
    apiKey: any;
    _isFetching: boolean = false;
    _errorMessage: string = '';

    constructor(appConfig: AppConfig, private http: HttpClient, private router: Router) {
        this.config = appConfig.getConfig();
        this.baseURLApi = this.config.baseURLApi;
        this.apiKey = this.config.apiKey;
    }

    get isFetching() {
        return this._isFetching;
    }

    set isFetching(val: boolean) {
        this._isFetching = val;
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');

        return !token;
    }

    loginUser(username, password) {
        let headers = {
            'headers': {
              'Content-type': 'application/json',
              'x-api-key' : this.apiKey
            }
        };
        let payload = {
            username: username,
            password: password
        };
        this.http.post(`${this.baseURLApi}/login`, JSON.stringify(payload), headers).subscribe((res: any) => {
            const {token, companyId} = res;
            this.receiveToken(token, companyId)
            this.router.navigate(['/home']);
        }, err => {
            this.loginError('Something was wrong. Try again');
        });
    }
    receiveToken(token, companyId) {
        
        localStorage.setItem('token', token);
        localStorage.setItem('companyId', companyId);
      }
    loginError(message) {
        console.log(message);
    }

}