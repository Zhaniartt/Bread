


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductsComponent } from './components/products/products/products.component';
import { ContactsComponent } from './components/contacts/contacts/contacts.component';
import { AboutComponent } from './components/about/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './components/contacts/contacts/contact.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION
} from 'ngx-ui-loader';
import { UsefulComponent } from './components/useful/useful.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'green',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5 // progress bar thickness
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ContactsComponent,
    AboutComponent,
    UsefulComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MDBBootstrapModule.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
