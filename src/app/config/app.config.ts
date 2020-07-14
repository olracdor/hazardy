import { Injectable } from '@angular/core';
import { environment } from './environment';

declare let jQuery: any;

const hostApi = ""; //process.env.NODE_ENV === 'development' ? 'http://localhost' : 'https://flatlogic-node-backend.herokuapp.com';
const portApi = "";//process.env.NODE_ENV === 'development' ? 8080 : '';
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;

@Injectable()
export class AppConfig {
    config = {
        name: 'Harardy',
        title: 'Hazardy App with Angular 9.0',
        version: '1.0.0',
        isBackend: environment.backend,
        hostApi,
        portApi,
        baseURLApi,
        auth: {
            email: 'santillan.rod@gmail.com',
            password: ''
        },
        debug: true,
    }

    getConfig(): Object {
        return this.config;
    }
}