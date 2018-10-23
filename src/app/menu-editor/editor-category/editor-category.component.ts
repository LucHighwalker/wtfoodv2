import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wtf-editor-category',
  templateUrl: './editor-category.component.html',
  styleUrls: ['./editor-category.component.scss']
})
export class EditorCategoryComponent implements OnInit {
  @Input()
  model: { type: string; id: number; columns };
  @Input()
  list: any[];

  constructor() { }

  ngOnInit() {
  }

  public isArray(object): boolean {
    return Array.isArray(object);
  }

  public removeItem(item: any, list: any[]): void {
    list.splice(list.indexOf(item), 1);
  }

}
