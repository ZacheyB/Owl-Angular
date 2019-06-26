import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { TeamService } from '../team.service';
import { TeamInfo } from '../teamInfo';
import { StylesCompileDependency } from '@angular/compiler';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  styles: []
})
export class TeamComponent implements OnInit {

  @Input() teamInfo: TeamInfo;

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

}
