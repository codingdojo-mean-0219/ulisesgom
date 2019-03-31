import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductsComponent, children:[
    {path: ':id', component: UpdateComponent}
  ]},
  {path: 'create', component: CreateComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
