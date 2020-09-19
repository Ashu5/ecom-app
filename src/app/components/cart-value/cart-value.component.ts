import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart-value',
  templateUrl: './cart-value.component.html',
  styleUrls: ['./cart-value.component.css']
})
export class CartValueComponent implements OnInit,OnChanges {
@Input() products:any[];
  constructor() { }
totalAmount=0;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const dataChanges: SimpleChange = changes.products;

    const products:any[] = dataChanges.currentValue;
    this.totalAmount = 0;
    products.forEach((product) => {
      this.totalAmount += product.productPrice;
    });

    console.log("products in cartValue",this.products);
  }

}
