import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WtfoodService {
  public testing = new Subject<string>();

  constructor(private http: HttpClient) {}

  thefuck() {
    this.http.get<{bro: string}>('http://localhost:4040/api/wtf/get').subscribe((json) => {
      this.testing.next(json.bro);
    });
  }
}
