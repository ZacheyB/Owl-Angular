import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { PlayerInfo } from './playerInfo';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl = 'https://api.overwatchleague.com/players';

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getPlayerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}

