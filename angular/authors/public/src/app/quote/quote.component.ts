import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  author;
  newQuote;
  param;

  constructor(
    private http: HttpService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.newQuote = {quotes: {quote:''}}
    this.route.params.subscribe(params => this.param = params.id);
    this.http.getAuthorById(this.param).subscribe(data => {
      this.author = data['doc'];
      console.log(data['doc'])
    });
  }

  addQuote(event: Event) {
    event.preventDefault();
    this.http.addQuote(this.author._id, this.newQuote).subscribe(data => {
      console.log(data);
      this.router.navigate(['/', 'author', this.param]);
    })
  };
  

}
