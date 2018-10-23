import { Component, OnInit } from '@angular/core';
import { WtfoodService } from '../services/wtfood.service';

@Component({
  selector: 'wtf-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.scss']
})
export class MenuEditorComponent implements OnInit {
  // public menu: any = {
  //   createdBy: {},
  //   menuName: 'New Menu',
  //   categories: [
  //     {
  //       name: 'Category 1',
  //       index: 0,
  //       items: [
  //         {
  //           name: 'burger',
  //           index: 0,
  //           price: 4.2,
  //           desc: 'burger goes good with beer',
  //           ingr: ['bread', 'meat']
  //         },
  //         {
  //           name: 'pizza',
  //           index: 1,
  //           price: 7.1,
  //           desc: 'pizza french fry',
  //           ingr: ['bread', 'meat']
  //         }
  //       ]
  //     },
  //     {
  //       name: 'Category 2',
  //       index: 1,
  //       items: [
  //         {
  //           name: 'burger',
  //           index: 0,
  //           price: 4.2,
  //           desc: 'burger goes good with beer',
  //           ingr: ['bread', 'meat']
  //         },
  //         {
  //           name: 'pizza',
  //           index: 1,
  //           price: 7.1,
  //           desc: 'pizza french fry',
  //           ingr: ['bread', 'meat']
  //         }
  //       ]
  //     }
  //   ]
  // };

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

  // addCategory() {
  //   const index = this.menu.categories.length;
  //   this.menu.categories.push({
  //     name: 'new category',
  //     index,
  //     items: []
  //   });
  // }

  // addItem(catIndex) {
  //   const index = this.menu.categories[catIndex].length;
  //   this.menu.categories[catIndex].items.push({
  //     name: 'new item',
  //     index,
  //     price: 0.0,
  //     desc: '',
  //     ingr: []
  //   });
  // }

  // saveMenu() {
  //   this.wtf.saveMenu(this.menu);
  // }

  // sortMenu(): any {
  //   const sortedMenu = this.menu;
  //   sortedMenu.categories = [];
  //   for (let c = 0; c < this.menu.categories.length; c++) {
  //     const category = this.menu.categories[c];
  //     category.items = [];
  //     for (let i = 0; i < this.menu.categories[c].items.length; i++) {
  //       const item = this.menu.categories[c].items[i];
  //       category.items[item.index] = item;
  //     }
  //     sortedMenu.categories[category.index] = category;
  //   }
  //   this.menu = sortedMenu;
  // }
}
