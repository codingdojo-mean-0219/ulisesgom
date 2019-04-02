import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private _http: HttpClient) { 
  };
  createAuthor(author: object) {
    return this._http.post('/authors/new',author);
  };
  deleteAuthor(author_id: string) {
    return this._http.delete('/remove/' + author_id);
  };
  deleteQuote(author_id: string, quote_id: string) {
    return this._http.get('author/'+author_id+'/'+quote_id);
  }
  getAuthors() {
    return this._http.get('/authors');
    // temp.subscribe(data => console.log(data))
  };
  getAuthorById(author_id: string) {
    return this._http.get('/authors/' + author_id);
    // temp.subscribe(data => console.log('single', data))
  };
  addQuote(author_id: string, quote: object) {
    return this._http.put('quote/' + author_id, quote);
  };
  upVoteQuote(author_id: string, author: object) {
    return this._http.put('author/'+author_id,author);
  };
  updateAuthor(author: object) {
    return this._http.put('/authors/'+ author['_id'],author);
  };

}
