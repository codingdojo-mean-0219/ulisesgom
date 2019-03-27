import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private _route: ActivatedRoute){}

  ngOnInit() {
    this._route.params.subscribe(params => this['param'] = params)
  }

}
