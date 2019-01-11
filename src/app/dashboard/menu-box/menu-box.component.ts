import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wtf-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.scss']
})
export class MenuBoxComponent implements OnInit {
  @Input()
  menu: any;

  @Input()
  type: string;

  public date: any;

  constructor() {}

  ngOnInit() {}

  test(e: any) {
    console.log(e.value);
  }
}
