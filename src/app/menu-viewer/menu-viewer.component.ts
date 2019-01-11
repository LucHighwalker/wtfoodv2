import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WtfoodService } from '../services/wtfood.service';

@Component({
  selector: 'wtf-menu-viewer',
  templateUrl: './menu-viewer.component.html',
  styleUrls: ['./menu-viewer.component.scss']
})
export class MenuViewerComponent implements OnInit {
  public menu: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private wtf: WtfoodService
    ) { }

  ngOnInit() {
    this.wtf.menuResponse.subscribe((resp: any) => {
      this.menu = resp.menu;
      console.log(this.menu);
    });

    this.activeRoute.params.subscribe(params => {
      const menuId = params['menuId'];
      if (menuId !== undefined) {
        this.wtf.getMenu(menuId);
      }
    });
  }

}
