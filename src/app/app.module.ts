import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { HomeComponent } from './home/home.component';
import { NewGameComponent } from './home/new-game/new-game.component';
import { ExsistingGameComponent } from './home/exsisting-game/exsisting-game.component';

const routes: Routes = [
  { path: 'game-play', component: GamePlayComponent},
  { path: 'home', component: HomeComponent},
  { path: 'NewGame', component: NewGameComponent},
  { path: 'ExsistingGame', component: ExsistingGameComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    GamePlayComponent,
    HomeComponent,
    NewGameComponent,
    ExsistingGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
