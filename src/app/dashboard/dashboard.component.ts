import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wtf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public curToken: string;
  public curUser: any;

  page = 'menus';

  constructor(
    private user: UserService,
    private activeRoute: ActivatedRoute,
    private cookie: CookieService
  ) {}

  ngOnInit() {
    this.user.userUpdate.subscribe(user => {
      this.curUser = user;
    });
    this.curToken = this.cookie.get('wtf-user-token');
    this.user.updateUser(this.curToken);

    this.activeRoute.queryParams.subscribe(params => {
      const page = params['page'];
      if (page !== undefined) {
        this.page = page;
      }
    });
  }
}
