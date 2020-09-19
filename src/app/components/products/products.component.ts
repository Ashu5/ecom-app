import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(res=>this.productList=res);
    console.log("product data",this.productList);
  }

}
