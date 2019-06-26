import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl = 'https://api.overwatchleague.com/teams';

  getTeams(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getTeamById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  constructor(private http: HttpClient) { }
}
