import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  };
  getAuthors() {
    return this._http.get('/authors')
    // tempObserve.subscribe(data => console.log(data));
  };

};
