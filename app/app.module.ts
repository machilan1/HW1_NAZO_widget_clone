import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavtagComponent } from './navtag/navtag.component';

import { NavbarSideComponent } from './navbar-side/navbar-side.component';
import { NavtagSideComponent } from './navtag-side/navtag-side.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavtagComponent,
    NavbarSideComponent,
    NavtagSideComponent,
    ProductListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
