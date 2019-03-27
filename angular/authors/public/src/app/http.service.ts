import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private _http: HttpClient) { 
  };
  deleteAuthor(author_id: string) {
    return this._http.delete('/remove/' + author_id);
  };
  getAuthors() {
    return this._http.get('/authors');
    // temp.subscribe(data => console.log(data))
  };
  getAuthorById(author_id: string) {
    return this._http.get('/authors/' + author_id);
    // temp.subscribe(data => console.log('single', data))
  };
  createAuthor(author: object) {
    return this._http.post('/authors/new',author);
  };
  updateAuthor(author: object) {
    return this._http.put('/authors/'+ author['_id'],author);
  };

}
