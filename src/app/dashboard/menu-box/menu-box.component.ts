import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  viewPerm = new EventEmitter();

  constructor(private wtf: WtfoodService) {}

  ngOnInit() {}

  dateChanged(dates: any = null) {
    this.menu.dates = dates.value;
    this.wtf.saveMenu(this.menu);
  }

  viewPermissions() {
    this.viewPerm.emit(this.menu._id);
  }
}
