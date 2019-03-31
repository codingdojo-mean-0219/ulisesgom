import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts;
  constructor(private dependentCall: AppComponent) { }

  ngOnInit() {
    this.dependentCall.getProductsFromService(this);
  }
}
