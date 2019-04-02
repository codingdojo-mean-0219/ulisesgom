import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor;
  
   
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""};
  } 

  createAuthor(event: Event) {
    event.preventDefault();
    this.http.createAuthor(this.newAuthor).subscribe(author => {
      console.log('author created!',author);
      this.router.navigateByUrl("/")      
    });
  }
}
