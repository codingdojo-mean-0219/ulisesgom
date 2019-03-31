import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  oneProudct = this.dependentCall.oneProduct;
  newProduct;
  constructor(private dependentCall: AppComponent) { }

  ngOnInit() {
    this.newProduct = {name:'', price:''};
  };

  createProduct () {
    this.dependentCall.onSubmitCreate(this);
  };

  updateProduct () {
    this.dependentCall.onSubmitUpdate(this);
  }

}
