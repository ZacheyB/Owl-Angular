import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerSearcherComponent } from './player-searcher/player-searcher.component';
import { TeamListComponent} from './team-list/team-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
const routes: Routes = [
  { path : 'players', component: PlayerSearcherComponent },
  { path : 'teams', component: TeamListComponent},
  { path : 'players/:id', component: PlayerDetailComponent},
  { path : 'teams/:id', component: TeamDetailComponent},
  { path : '', redirectTo: '/players', pathMatch: 'full'},
  { path: '**', redirectTo: '/players', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
