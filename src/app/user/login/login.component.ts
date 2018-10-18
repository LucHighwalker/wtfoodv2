import { Component, OnInit } from '@angular/core';
import { WtfoodService } from '../../services/wtfood.service';
import { CookieService } from 'ngx-cookie-service';

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
  public loggedIn: boolean;

  private curToken: string;
  private curUser: {};

  constructor(private wtf: WtfoodService, private cookie: CookieService) {}

  ngOnInit() {
    this.wtf.loginMsg.subscribe((msg: { login: string; token: string }) => {
      this.createToken(msg.token);
    });
    this.wtf.signupMsg.subscribe((msg: { signup: string; token: string }) => {
      this.createToken(msg.token);
    });
    this.wtf.userUpdate.subscribe((user: { user: {}, token: string }) => {
      if (user.user !== null) {
        this.curUser = user;
        this.loggedIn = true;
      } else {
        this.curUser = null;
        this.loggedIn = false;
      }
    });
    this.curToken = this.cookie.get('wtf-user-token');
    this.wtf.getUser(this.curToken);
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

  createToken(token) {
    this.cookie.set('wtf-user-token', token, 99999);
    this.curToken = token;
    this.wtf.getUser(token);
  }

  logout() {
    this.cookie.delete('wtf-user-token');
    this.loggedIn = false;
    this.wtf.getUser('');
  }
}
