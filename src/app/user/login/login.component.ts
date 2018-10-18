import { Component, OnInit } from '@angular/core';
import { WtfoodService } from '../../services/wtfood.service';

@Component({
  selector: 'wtf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public confPassword: string;

  public showSignup: boolean;

  constructor(private wtf: WtfoodService) {}

  ngOnInit() {
    this.wtf.loginMsg.subscribe((resp) => {
      console.log(resp);
    });
    this.wtf.signupMsg.subscribe((resp) => {
      console.log(resp);
    });
  }

  login() {
    this.wtf.login({
      email: this.email,
      password: this.password
    });
  }

  signup() {
    this.wtf.signup({
      email: this.email,
      password: this.password
    });
  }

  toggleSignup() {
    this.showSignup = !this.showSignup;
  }
}
