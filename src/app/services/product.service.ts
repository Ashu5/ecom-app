import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData: any[] = [];
  constructor(private http: HttpClient,private toastService:ToastService) { }

  getProduct() {
    return this.http.get('../../../assets/products/product.json');
  }

  addToCart(product) {

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

  removeLocalCartProduct(product) {
    const products = JSON.parse(localStorage.getItem("cartData"));

    for (let i = 0; i < products.length; i++) {
      if (products[i]._Id === product._Id) {
        products.splice(i, 1);
        break;
      }
    }

    this.getLocalCartProducts();
    // ReAdding the products after remove
    localStorage.setItem("cartData", JSON.stringify(products));
  }

  getLocalCartProducts(): [] {
    const products: [] =
      JSON.parse(localStorage.getItem("cartData")) || [];
     console.log("Product Service Product Length", products.length);
    return products;
  }


  addFavouriteProduct(data): void {

    localStorage.setItem("favData", JSON.stringify(data));

  }
}
