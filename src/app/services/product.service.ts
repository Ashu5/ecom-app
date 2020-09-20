import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/Product';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData: Product[] = [];
  constructor(private http: HttpClient, private toastService: ToastService) { }

  getProduct() {
    return this.http.get('../../../assets/products/product.json');
  }

  addToCart(product: Product) {

    this.cartData.push(product);
    console.log("cartValues", this.cartData);
    // this.toastService.wait(
    //   "Adding Product to Cart",
    //   "Product Adding to Cart"
    // );
    // setTimeout(()=>{

    // },300);
    localStorage.setItem("cartData", JSON.stringify(this.cartData));
  }

  removeLocalCartProduct(product: Product) {
    const products = JSON.parse(localStorage.getItem("cartData"));


    for (let i = 0; i < products.length; i++) {

      if (product[i]._id == products[i]._id) {
        products.splice(i, 1);
        console.log("spliced", products);
      }
      break;

    }


    // ReAdding the products after remove
    localStorage.setItem("cartData", JSON.stringify(products));
  }

  getLocalCartProducts(): Product[] {
    const products: Product[] =
      JSON.parse(localStorage.getItem("cartData")) || [];
    console.log("Product Service Product Length", products.length);
    return products;
  }


  addFavouriteProduct(data): void {

    localStorage.setItem("favData", JSON.stringify(data));

  }
}
