import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AdsBannerComponent } from './ads-banner/ads-banner.component';
import { SwiperModule } from "swiper/angular";
import { CategoryRowComponent } from './category-row/category-row.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from  '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MenuBarComponent,
    AdsBannerComponent,
    CategoryRowComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    SwiperModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
