import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WtfoodService {
  public testing = new Subject<string>();
  public signupMsg = new Subject<{}>();

  constructor(private http: HttpClient) {}

  thefuck() {
    this.http.get<{bro: string}>('http://localhost:4040/api/wtf/get').subscribe((json) => {
      this.testing.next(json.bro);
    });
  }

  signup() {
    console.log('shit');
    this.http.post<{signup: string, token: any, error: any}>('http://localhost:4040/api/auth/signup', {
      email: 'afsfwdfsdf@gmail.com',
      password: 'test'
    }, ).subscribe((resp) => {
      console.log('got response');
      this.signupMsg.next(resp);
    });
  }
}
