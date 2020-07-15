import { AppConfig } from '../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    config: any;
    baseURLApi: any;
    apiKey: any;
    _isFetching: boolean = false;
    _errorMessage: string = '';

    constructor(appConfig: AppConfig, private http: HttpClient) {
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
            const token = res.token;
            this.receiveToken(token)
        }, err => {
            this.loginError('Something was wrong. Try again');
        });
    }
    receiveToken(token) {
        
        localStorage.setItem('token', token);
       
      }
    loginError(message) {
        console.log(message);
    }

}