import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wtf-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input()
  category: any;

  constructor() { }

  ngOnInit() {
  }

}
