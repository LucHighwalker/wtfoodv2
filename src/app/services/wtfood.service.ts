import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WtfoodService {
  public signupMsg = new Subject<{}>();
  public loginMsg = new Subject<{}>();

  constructor(private http: HttpClient) {}

  // auth

  signup(body) {
    this.http
      .post<{ signup: string; token: any; error: any }>(
        'http://localhost:4040/api/auth/signup',
        body
      )
      .subscribe(resp => {
        this.signupMsg.next(resp);
      });
  }

  login(body) {
    this.http
      .post<{ signup: string; token: any; error: any }>(
        'http://localhost:4040/api/auth/login',
        body
      )
      .subscribe(resp => {
        this.signupMsg.next(resp);
      });
  }

  // crud
}
