import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _route: ActivatedRoute){}
  ngOnInit() {
    this._route.params.subscribe(params => this['param'] = params)
  }

}
