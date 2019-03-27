import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute){}
  ngOnInit() {
    this._route.params.subscribe(params => this['param'] = params)
  }

}
