import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {

  constructor(private _route: ActivatedRoute){}

  ngOnInit() {
    this._route.params.subscribe(params => this['param'] = params)
  }

}
