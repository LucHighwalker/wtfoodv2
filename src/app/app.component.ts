import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'wtf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'wtFood';
  public mode = new FormControl('over');
}
