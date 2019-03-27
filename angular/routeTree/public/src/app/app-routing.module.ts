import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { AuthorComponent } from './author/author.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { CategoryComponent } from './category/category.component';
import { BrandComponent } from './brand/brand.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent, children: [
    { path: 'details/:id', component: ProductDetailComponent },
    { path: 'brand/:brand', component: BrandComponent },
    { path: 'category/:cat', component: CategoryComponent }
  ]},
  {path: 'reviews', component: ReviewsComponent, children: [
    { path: 'details/:id', component: ReviewDetailComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: 'all/:id', component: AllReviewsComponent }
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/sanjose' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
