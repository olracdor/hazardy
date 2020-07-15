import { Injectable } from '@angular/core';
import { environment } from './environment';

declare let jQuery: any;

const hostApi = "https://vioido9u5.execute-api.ap-southeast-2.amazonaws.com/dev/v1";
const portApi = "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;
const apiKey = "";

@Injectable()
export class AppConfig {
    config = {
        name: 'Harardy',
        title: 'Hazardy App with Angular 9.0',
        version: '1.0.0',
        apiKey,
        hostApi,
        portApi,
        baseURLApi,
        auth: {
            email: '',
            password: ''
        },
        debug: true,
    }

    getConfig(): Object {
        return this.config;
    }
}