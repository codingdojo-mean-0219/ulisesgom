import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  oneProduct;

  constructor(private dependentCall: AppComponent, private _route: ActivatedRoute) { }

  ngOnInit() {
    let param;
    this._route.params.subscribe(params => param = params);
    this.dependentCall.getOneProductFromService(this, param.id);
  }
  updateProduct(){
    this.dependentCall.onSubmitUpdate(this);
  }

}
