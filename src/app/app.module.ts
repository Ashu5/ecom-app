import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {CrouselComponent} from "./shared/crousel/crousel.component";
import { HeaderComponent } from './shared/header/header.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { CartControllerComponent } from './components/cart-controller/cart-controller.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CrouselComponent,
    HeaderComponent,
    LoaderComponent,
    NavbarComponent,
    FormComponent,
    CartControllerComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
