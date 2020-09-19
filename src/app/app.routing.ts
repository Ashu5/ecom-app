import { compileComponentFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartControllerComponent } from './components/cart-controller/cart-controller.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component:HomeComponent
        
    },
    {
      path:"login",
      component:LoginComponent
    },
    {
    path:"products",
    component:ProductsComponent
    },
    {
    path:"cart",
    component:CartControllerComponent
    }
    
];
    @NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule],
    })
    export class AppRoutingModule { }