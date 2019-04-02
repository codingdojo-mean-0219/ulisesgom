import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allAuthors: object;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }
  deleteAuthor(id: string) {
    this.http.deleteAuthor(id).subscribe(doc => {
      console.log('Deleted author');
      this.getAuthors();
    })
  }
  getAuthors() {
    this.http.getAuthors().toPromise()
    .then(authors => {
      this.allAuthors = authors['docs'];
    })
    .catch(err => {msg: err});
  }
}
