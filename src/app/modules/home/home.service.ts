import { AppConfig } from '../../config/app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';

@Injectable()
export class HomeService {
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

    getHazards() : Observable<Object>{
        let results;
        let headers = {
            'headers': {
              'Content-type': 'application/json',
              'x-api-key' : this.apiKey
            }
        };

        this.http.get(`${this.baseURLApi}/hazards?companyId=${localStorage.getItem("companyId")}`, headers).subscribe((res: any) => {
            results = res;
        }, err => {
            console.log(err);
            results = {};
        });
        return results;
    }


}