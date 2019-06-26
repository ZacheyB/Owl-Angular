import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PlayerService } from '../player.service';
import { PlayerInfo } from '../playerInfo';

@Component({
  selector: 'app-player-searcher',
  templateUrl: './player-searcher.component.html',
  styleUrls: ['./player-searcher.component.css']
})
export class PlayerSearcherComponent implements OnInit {

  allPlayers;
  playerName: string;
  players: PlayerInfo[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(players => {
      this.allPlayers = players.content;
      this.players = [];
      this.allPlayers.forEach(element => {
        this.players.push({
          id: element.id,
          name: element.name,
          team: element.teams[0].team.name,
          headshotUrl: element.headshot,
          favoriteHeroes: element.attributes.heroes
        });
      });
    });
  }

  updateFilters() {
      this.players = [];
      const filtered = this.allPlayers.filter(player => player.name.toUpperCase().includes(this.playerName.toUpperCase()));
      filtered.forEach(element => {
        this.players.push({
          id: element.id,
          name: element.name,
          team: element.teams[0].team.name,
          headshotUrl: element.headshot,
          favoriteHeroes: element.attributes.heroes
        });
      });
  }
}
