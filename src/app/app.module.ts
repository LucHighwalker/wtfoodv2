import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WtfoodService } from './services/wtfood.service';
import { ServerTestComponent } from './server-test/server-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WtfoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
