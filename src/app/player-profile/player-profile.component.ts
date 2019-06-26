import { Component, OnInit, Input } from '@angular/core';

import { PlayerService } from '../player.service';
import { PlayerInfo } from '../playerInfo';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  public heroIcons = {
    dva: 'assets/tank.png',
    orisa: 'assets/tank.png',
    reinhardt: 'assets/tank.png',
    roadhog: 'assets/tank.png',
    winston: 'assets/tank.png',
    'wrecking-ball': 'assets/tank.png',
    zarya: 'assets/tank.png',
    ashe: 'assets/damage.png',
    bastion: 'assets/damage.png',
    doomfist: 'assets/damage.png',
    genji: 'assets/damage.png',
    hanzo: 'assets/damage.png',
    junkrat: 'assets/damage.png',
    mccree: 'assets/damage.png',
    mei: 'assets/damage.png',
    pharah: 'assets/damage.png',
    reaper: 'assets/damage.png',
    'soldier-76': 'assets/damage.png',
    sombra: 'assets/damage.png',
    symmetra: 'assets/damage.png',
    torbjorn: 'assets/damage.png',
    tracer: 'assets/damage.png',
    widowmaker: 'assets/damage.png',
    ana: 'assets/support.png',
    baptiste: 'assets/support.png',
    brigitte: 'assets/support.png',
    lucio: 'assets/support.png',
    mercy: 'assets/support.png',
    moira: 'assets/support.png',
    zenyatta: 'assets/support.png'
  };

  @Input() playerInfo: PlayerInfo;

  constructor() { }

  ngOnInit() {}

  }
