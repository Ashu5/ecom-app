import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-controller',
  templateUrl: './cart-controller.component.html',
  styleUrls: ['./cart-controller.component.css']
})
export class CartControllerComponent implements OnInit {
cartProducts:Product[]=[];
//items:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
   this.getCartProduct();
  }

  removeCartProduct(product) {
    this.productService.removeLocalCartProduct(product);

    // Recalling
    //this.getCartProduct();
  }

  getCartProduct() {
   this.cartProducts=this.productService.getLocalCartProducts();
  //   console.log("TEST",this.cartProducts);
    
   }
}
