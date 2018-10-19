import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WtfoodService {

  constructor(private http: HttpClient, private user: UserService) {}

  saveMenu(menu) {
    const token = this.user.getUser().token;
    this.http.post('http://localhost:4040/api/wtf/save', {
      token,
      menu
    }).subscribe(resp => {
      console.log(resp);
    });
  }
}
