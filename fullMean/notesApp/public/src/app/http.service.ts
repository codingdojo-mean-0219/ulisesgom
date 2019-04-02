import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  createNote(note: object) {
    return this.http.post('/note/new', note);
  };

  getNotes() {
    return this.http.get('/notes');
  }

}
