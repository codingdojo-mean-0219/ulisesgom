import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oneProduct;
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    
  }
  deleteProduct(product_id: string) {
    let observable = this._httpService.deleteProduct(product_id);
    observable.subscribe(data => {
      this.getProductsFromService(self);
    })
  }
  getProductsFromService(self) {
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log('all', data);
      self.allProducts = data['docs'];
    })
  };
  getOneProductFromService(self, product_id:string) {
    let observable = this._httpService.getProductById(product_id);
    observable.subscribe(data => {
      console.log('single', data);
      self['oneProduct'] = data['doc'];
    });
  };

  onSubmitCreate(self) {
    let observable = this._httpService.createProduct(self.newProduct);
    observable.subscribe(data => {
      console.log('create', data);
    });
    self.newProduct = {name:'', price:''};
  };

  onSubmitUpdate(self: object) {
    let observable = this._httpService.updateProduct(self['oneProduct']);
    observable.subscribe(data => {
      console.log(data,'updated');
      // let redirect = this._httpService.redirectToProducts();
      // redirect.
    });
    
  }
}

