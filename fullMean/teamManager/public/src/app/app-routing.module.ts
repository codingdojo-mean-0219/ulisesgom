import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerGame1Component } from './player-game1/player-game1.component';
import { PlayerGame2Component } from './player-game2/player-game2.component';
import { PlayerGame3Component } from './player-game3/player-game3.component';

const routes: Routes = [
  {path: 'players/list', component: PlayerListComponent},
  {path: 'players/addPlayer', component: PlayerFormComponent},
  {path: 'status/game/1', component: PlayerGame1Component},
  {path: 'status/game/2', component: PlayerGame2Component},
  {path: 'status/game/3', component: PlayerGame3Component},
 
  {path:'', pathMatch: 'full', redirectTo: 'players/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
