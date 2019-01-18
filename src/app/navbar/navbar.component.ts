import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wtf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  mobile: boolean;

  public activePage: string;

  public loggedIn = false;

  constructor(
    private user: UserService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user.userUpdate.subscribe((user: { user: {}; token: string }) => {
      if (user.user !== null) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });

    this.activeRoute.queryParams.subscribe(params => {
      const page = params['page'];
      this.activePage = page;
    });
  }
}
