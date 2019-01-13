import { Component, OnInit, Input } from '@angular/core';
import { WtfoodService } from 'src/app/services/wtfood.service';

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

  constructor(private wtf: WtfoodService) {}

  ngOnInit() {}

  dateChanged(dates: any = null) {
    this.menu.dates = dates.value;
    this.wtf.saveMenu(this.menu);
  }
}
