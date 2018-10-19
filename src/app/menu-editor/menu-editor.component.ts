import { Component, OnInit } from '@angular/core';
import { WtfoodService } from '../services/wtfood.service';

@Component({
  selector: 'wtf-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.scss']
})
export class MenuEditorComponent implements OnInit {
  public menu: any = {
    createdBy: {},
    menuName: 'New Menu',
    categories: [
      {
        name: 'Category 1',
        items: [
          {
            name: 'burger',
            price: 4.20,
            desc: 'burger goes good with beer',
            ingr: ['bread', 'meat']
          },
          {
            name: 'pizza',
            price: 7.10,
            desc: 'pizza french fry',
            ingr: ['bread', 'meat']
          }
        ]
      },
      {
        name: 'Category 2',
        items: [
          {
            name: 'burger',
            price: 4.20,
            desc: 'burger goes good with beer',
            ingr: ['bread', 'meat']
          },
          {
            name: 'pizza',
            price: 7.10,
            desc: 'pizza french fry',
            ingr: ['bread', 'meat']
          }
        ]
      }
    ]
  };

  constructor(private wtf: WtfoodService) { }

  ngOnInit() {
    console.log(this.menu);
  }

  addCategory() {
    this.menu.categories.push({
      name: 'new category',
      items: []
    });
  }

  addItem(category) {
    for (let i = 0; i < this.menu.categories.length; i++) {
      if (this.menu.categories[i].name === category.name) {
        this.menu.categories[i].items.push({
          name: 'new item',
          price: 0.00,
          desc: '',
          ingr: []
        });
      }
    }
  }

  saveMenu() {
    this.wtf.saveMenu(this.menu);
  }

}
