import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../player.service';
import { TeamService } from '../team.service';
import { PlayerInfo } from '../playerInfo';
import { TeamInfo } from '../teamInfo';
import { SocialMedia } from '../socialMedia';
import { element } from 'protractor';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  playerInfo: PlayerInfo;
  teamInfo: TeamInfo;
  socialMedia: SocialMedia[];

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit() {
    this.playerService.getPlayerById(+this.route.snapshot.paramMap.get('id')).subscribe(player => {
        this.playerInfo = {
          id: player.data.player.id,
          name: player.data.player.name,
          team: player.data.player.teams[0].team.name,
          headshotUrl: player.data.player.headshot,
          favoriteHeroes: player.data.player.attributes.heroes

        };
        this.teamInfo = {
          id: player.data.player.teams[0].team.id,
          name: player.data.player.teams[0].team.name,
          logoUrl: player.data.player.teams[0].team.icon,
          color1: player.data.player.teams[0].team.primaryColor,
          color2: player.data.player.teams[0].team.secondaryColor
        };
        this.socialMedia = [];
        player.data.player.accounts.forEach(account => {
          this.socialMedia.push({
            platformName: account.accountType.replace('_', ' '),
            url: account.value
          });
        });
    });
  }

  goBack() {
    this.location.back();
  }

}
