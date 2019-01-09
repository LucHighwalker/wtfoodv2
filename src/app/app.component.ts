import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'wtf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'wtFood';
  public mode = new FormControl('side');

  constructor () {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 920) {
      this.mode = new FormControl('over');
    } else {
      this.mode = new FormControl('side');
    }
  }
}
