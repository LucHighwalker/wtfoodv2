import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wtf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public email: string;
  public password: string;
  public confPassword: string;

  public showSignup: boolean;
  public loggedIn: boolean;

  public activePage: string;

  private curToken: string;
  private curUser: {};

  constructor(
    private user: UserService,
    private activeRoute: ActivatedRoute,
    private cookie: CookieService
  ) {}

  ngOnInit() {
    this.user.loginMsg.subscribe((msg: { login: string; token: string }) => {
      this.createToken(msg.token);
    });
    this.user.signupMsg.subscribe((msg: { signup: string; token: string }) => {
      this.createToken(msg.token);
    });
    this.user.userUpdate.subscribe((user: { user: {}; token: string }) => {
      if (user.user !== null) {
        this.curUser = user;
        this.loggedIn = true;
      } else {
        this.curUser = null;
        this.loggedIn = false;
      }
    });
    this.curToken = this.cookie.get('wtf-user-token');
    this.user.updateUser(this.curToken);

    this.activeRoute.queryParams.subscribe(params => {
      const page = params['page'];
      if (page !== undefined) {
        this.activePage = page;
      }
    });
  }

  login() {
    this.user.login({
      email: this.email,
      password: this.password
    });
  }

  signup() {
    this.user.signup({
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
    this.user.updateUser(token);
  }

  logout() {
    this.cookie.delete('wtf-user-token');
    this.loggedIn = false;
    this.user.updateUser('');
  }
}
