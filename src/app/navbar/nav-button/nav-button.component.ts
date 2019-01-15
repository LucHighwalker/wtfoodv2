import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wtf-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  page: string;

  @Input()
  activePage: string;

  constructor() { }

  ngOnInit() {
  }

}
