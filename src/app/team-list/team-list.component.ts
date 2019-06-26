import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { TeamInfo } from '../teamInfo';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teamList: TeamInfo[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(teams => {
      this.teamList = [];
      console.log(teams);
      teams.competitors.forEach(e => {
        this.teamList.push({
          id: e.competitor.id,
          name: e.competitor.name,
          logoUrl: e.competitor.icon,
          color1: e.competitor.primaryColor,
          color2: e.competitor.secondaryColor
        });
      });
    });
  }

}
