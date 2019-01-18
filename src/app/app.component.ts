import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'wtf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'wtFood';
  public mode = new FormControl('side');
  public mobile = false;

  public curUrl;

  constructor (private router: Router) {
    this.onResize();
  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      const curUrl = event.url;
      if (curUrl !== undefined) {
        this.curUrl = curUrl;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 920) {
      this.mode = new FormControl('over');
      this.mobile = true;
    } else {
      this.mode = new FormControl('side');
      this.mobile = false;
    }
  }
}
