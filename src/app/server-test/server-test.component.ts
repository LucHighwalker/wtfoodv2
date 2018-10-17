import { Component, OnInit } from '@angular/core';
import { WtfoodService } from '../services/wtfood.service';

@Component({
  selector: 'wtf-server-test',
  templateUrl: './server-test.component.html',
  styleUrls: ['./server-test.component.scss']
})
export class ServerTestComponent implements OnInit {
  constructor(private wtf: WtfoodService) {}

  ngOnInit() {
    this.wtf.signupMsg.subscribe(resp => {
      console.log(resp);
    });
    this.wtf.signup({
      email: 'afsfwdfsdf@gmail.com',
      password: 'test'
    });
    this.wtf.loginMsg.subscribe(resp => {
      console.log(resp);
    });
    this.wtf.login({
      email: 'afsfwdfsdf@gmail.com',
      password: 'test'
    });
  }
}
