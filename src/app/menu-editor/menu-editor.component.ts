import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WtfoodService } from '../services/wtfood.service';

@Component({
  selector: 'wtf-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuEditorComponent implements OnInit {
  sourceBuilderTools = [
    {
      name: 'Category',
      children: [] as any[],
      inputType: 'section',
      icon: 'far fa-square',
      class: 'wide'
    },
    {
      name: 'Item',
      inputType: 'string',
      price: 2.15,
      icon: 'fas fa-language',
      class: 'half'
    }
  ];
  menu: any[] = [];

  constructor(private wtf: WtfoodService) {}

  ngOnInit() {}

  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;

  builderDrag(e: any) {
    console.log('dragging');
    this.log(e);
  }

  log(e: any) {
    console.log(e.type, e);
    console.log(this.menu);
  }

  canMove(e: any): boolean {
    return e.indexOf('Disabled') === -1;
  }

  saveMenu() {
    this.wtf.saveMenu(this.menu);
  }
}
