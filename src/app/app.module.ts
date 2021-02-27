import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './Lab4Component/lab4.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { CategorymenuComponent } from './categorymenu/categorymenu.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SwifthomeComponent } from './swifthome/swifthome.component';
import { SwiftnevbarComponent } from './swiftnevbar/swiftnevbar.component';
import { SwiftsearchbarComponent } from './swiftsearchbar/swiftsearchbar.component';
import { SwiftbannerComponent } from './swiftbanner/swiftbanner.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, CountingComponent, Lab4Component, NavbarComponent, TopbannerComponent, CategorymenuComponent, SearchbarComponent, ToDoListComponent, SwifthomeComponent, SwiftnevbarComponent, SwiftsearchbarComponent, SwiftbannerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
