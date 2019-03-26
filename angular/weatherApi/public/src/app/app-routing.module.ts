import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';

const routes: Routes = [
  {path: 'seattle', component: SeattleComponent},
  {path: 'sanjose', component: SanjoseComponent},
  {path: 'dc', component: DcComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'chicago', component: ChicagoComponent},
  {path: 'burbank', component: BurbankComponent},
  { path: '', pathMatch: 'full', redirectTo: '/sanjose' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
