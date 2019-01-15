import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  allTeams: Team[];

  constructor(
    private teamService: TeamService
  ) { }

  getTeams() {
    this.teamService.getTeams()
      .subscribe((data: Team[]) => {
        this.allTeams = _.sortBy(data, [function(o) { return o.locale; }]);
      });
  }

  ngOnInit() {
    this.getTeams();
  }

}
