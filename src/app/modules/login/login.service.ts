import { AppConfig } from '../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    config: any;
    _isFetching: boolean = false;
    _errorMessage: string = '';

    constructor(appConfig: AppConfig, private http: HttpClient) {
        this.config = appConfig.getConfig();
    }

    get isFetching() {
        return this._isFetching;
    }

    set isFetching(val: boolean) {
        this._isFetching = val;
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');

        return token
    }

    loginUser(creds) {

        this.http.post('/v1/login', creds).subscribe((res: any) => {
            const token = res.token;

        }, err => {
            this.loginError('Something was wrong. Try again');
        });
    }

    loginError(message) {
        console.log(message);
    }

}