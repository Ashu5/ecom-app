import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {CrouselComponent} from "./shared/crousel/crousel.component";
import { HeaderComponent } from './shared/header/header.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CrouselComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
