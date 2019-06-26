import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { PlayerProfileComponent } from '../player-profile/player-profile.component';
import { PlayerInfo } from '../playerInfo';
import { SocialMedia } from '../socialMedia';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  title: string;
  players: PlayerInfo[];
  hometown: string;
  socialMedia: SocialMedia[];


  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit() {
    this.players = [];
    this.socialMedia = [];
    this.teamService.getTeamById(+this.route.snapshot.paramMap.get('id')).subscribe(team => {
      this.title = team.name;
      this.hometown = team.homeLocation;
      if (team.players) {
      team.players.forEach(player => {
        const heroes = [];
        if (player.attributes.heroes) {
          player.attributes.heroes.forEach(h => heroes.push(h.name));
        }
        this.players.push({
          id: player.id,
          name: player.name,
          team: team.name,
          headshotUrl: player.headshot,
          favoriteHeroes: heroes
        });
      });
    }
      team.accounts.forEach(account => {
        this.socialMedia.push({
          platformName: account.accountType.replace('_', ' '),
          url: account.value
        });
      });
    });
  }

  goBack(): void {
    this.location.back();
  }

}
