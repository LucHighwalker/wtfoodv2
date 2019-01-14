import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WtfoodService {
  public menuResponse = new Subject<{}>();
  public permissionResponse = new Subject<any>();

  constructor(private http: HttpClient, private user: UserService) {}

  getMenu(menuId) {
    const url = 'http://localhost:4040/api/wtf/get/' + menuId;
    this.http.get(url).subscribe(resp => {
      this.menuResponse.next(resp);
    });
  }

  getPermissions(menuId) {
    const url = 'http://localhost:4040/api/wtf/getperm/' + menuId;
    this.http.get(url).subscribe(resp => {
      this.permissionResponse.next(resp);
    });
  }

  saveMenu(menu) {
    const token = this.user.getUser().token;
    this.http
      .post('http://localhost:4040/api/wtf/save', {
        token,
        menu
      })
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
