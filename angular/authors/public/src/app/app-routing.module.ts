import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: NewComponent},
  {path: 'author/:id', component: ShowComponent},
  {path: 'quote/:id', component: QuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
