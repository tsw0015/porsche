import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { ShoppingToolsNavBarComponent } from './shopping-tools-nav-bar/shopping-tools-nav-bar.component';
import { TopCarouselComponent } from './top-carousel/top-carousel.component';
import { TopNavBarComponent } from './headers/top-nav-bar.component';
import { LayoutMainComponent } from './layout/layout-main.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    TopCarouselComponent,
    ShoppingToolsNavBarComponent,
    LayoutMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
