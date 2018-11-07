import { Component, OnInit } from '@angular/core';
import { WtfoodService } from '../services/wtfood.service';

@Component({
  selector: 'wtf-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.scss']
})
export class MenuEditorComponent implements OnInit {
  public nestedList = {
    selected: null,
    templates: [
      { type: 'category', id: 1, columns: [[], []] },
      { type: 'item', id: 2 }
    ],
    dropzones: [
      []
    ]
  };

  constructor(private wtf: WtfoodService) {}

  ngOnInit() {
    // console.log(this.menu);
  }

  public removeItem(item: any, list: any[]): void {
    list.splice(list.indexOf(item), 1);
  }

  public addColumn(): void {
    this.nestedList.dropzones.push([]);
  }
}
