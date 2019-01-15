import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { WtfoodService } from './services/wtfood.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuEditorComponent } from './menu-editor/menu-editor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuViewerComponent } from './menu-viewer/menu-viewer.component';
import { CategoryComponent } from './menu-viewer/category/category.component';
import { ItemComponent } from './menu-viewer/item/item.component';
import { MenuBoxComponent } from './dashboard/menu-box/menu-box.component';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { NavButtonComponent } from './navbar/nav-button/nav-button.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NotFoundComponent,
    MenuEditorComponent,
    NavbarComponent,
    MenuViewerComponent,
    CategoryComponent,
    ItemComponent,
    MenuBoxComponent,
    NavButtonComponent,
    LoginComponent
  ],
  imports: [
    NgxDnDModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    SatDatepickerModule,
    SatNativeDateModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'new',
        component: MenuEditorComponent
      },
      {
        path: 'view/:menuId',
        component: MenuViewerComponent
      },
      {
        path: 'edit/:menuId',
        component: MenuEditorComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    WtfoodService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
