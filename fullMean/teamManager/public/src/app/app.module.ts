import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { FormsModule } from '@angular/forms';
import { PlayerGame1Component } from './player-game1/player-game1.component';
import { PlayerGame2Component } from './player-game2/player-game2.component';
import { PlayerGame3Component } from './player-game3/player-game3.component';
import { PlayerNavComponent } from './player-nav/player-nav.component';
import { StatusNavComponent } from './status-nav/status-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerFormComponent,
    PlayerGame1Component,
    PlayerGame2Component,
    PlayerGame3Component,
    PlayerNavComponent,
    StatusNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
