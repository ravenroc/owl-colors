import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  mockteam: Team = {
    locale: 'vancouver',
    name: 'skaters',
    colors: [''],
  };

  allteams: Team[];

  constructor(
    private teamService: TeamService
  ) { }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe(teams => this.allteams = teams);
  }

  ngOnInit() {
    this.getTeams();
  }

}
