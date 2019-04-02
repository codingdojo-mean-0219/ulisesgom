import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  author;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    let param;
    this.route.params.subscribe(params => param = params.id);
    this.getAuthor(param);
  }
  deleteQuote(quote_id: string) {
    console.log('in comp');
    this.http.deleteQuote(this.author._id, quote_id)
    .subscribe(doc => {
      console.log(doc);
      this.getAuthor(this.author._id);
    });
  }
  getAuthor(author_id: string) {
    this.http.getAuthorById(author_id).subscribe(data => {
      this.author = data['doc'];
      console.log(data['doc'])
    });
  }
  voteUp() {
    this.author
    this.http.voteUp
  }

}
