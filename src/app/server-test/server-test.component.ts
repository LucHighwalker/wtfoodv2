import { Component, OnInit } from '@angular/core';
import { WtfoodService } from '../services/wtfood.service';

@Component({
  selector: 'wtf-server-test',
  templateUrl: './server-test.component.html',
  styleUrls: ['./server-test.component.css']
})
export class ServerTestComponent implements OnInit {

  constructor(private wtf: WtfoodService) { }

  ngOnInit() {
    this.wtf.thefuck();
    this.wtf.testing.subscribe((resp) => {
      console.log(resp);
    });
  }

}
