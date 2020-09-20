import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-controller',
  templateUrl: './cart-controller.component.html',
  styleUrls: ['./cart-controller.component.css']
})
export class CartControllerComponent implements OnInit {
cartProducts:any[]=[];
items={};
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.items= this.productService.getLocalCartProducts();
    if(this.items[0]!=null)
    this.cartProducts.push(this.items);
    console.log("CartProduct Length",this.cartProducts.length);
  }

  removeCartProduct(product) {
    this.productService.removeLocalCartProduct(product);

    // Recalling
    //this.getCartProduct();
  }

  // getCartProduct() {
  //   this.cartProducts.push(this.productService.getLocalCartProducts());
  //   console.log("TEST",this.cartProducts);
    
  // }
}
