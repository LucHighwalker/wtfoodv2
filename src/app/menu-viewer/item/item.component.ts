import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wtf-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item: any;

  constructor() { }

  ngOnInit() {
    this.item.desc = 'alksdjfblksj bfnlkajdsfnlka sjdnflkjdsnfk jsdafnlkajdnl skdjnlak sjdfn lkjdjashflk asdflkjasd adsfsdfjnas sdfasd';
  }

}
