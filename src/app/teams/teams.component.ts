import { Component, OnInit } from '@angular/core';
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
      .subscribe((data: Team[]) => this.allTeams = data);
  }

  ngOnInit() {
    this.getTeams();
  }

}
