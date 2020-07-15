import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }
  public login() {
    const {email, password} = this;

    if (email.length !== 0 && password.length !== 0) {
      this.loginService.loginUser(email, password);
    }
  }
}
