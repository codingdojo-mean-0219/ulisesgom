import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private _http: HttpClient) { 
  };
  deleteProduct(product_id: string) {
    return this._http.delete('/remove/' + product_id);
  };
  getProducts() {
    return this._http.get('/products');
    // temp.subscribe(data => console.log(data))
  };
  getProductById(product_id: string) {
    return this._http.get('/products/' + product_id);
    // temp.subscribe(data => console.log('single', data))
  };
  createProduct(product: object) {
    return this._http.post('/products/new',product);
  };
  redirectToProducts() {
    return this._http.get('/product');
  }
  updateProduct(product: object) {
    return this._http.put('/products/'+ product['_id'],product);
  };

}
