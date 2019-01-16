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
  sortingBy: string;
  defaultSort: string = 'locale';

  constructor(
    private teamService: TeamService
  ) { }

  updateSorting(newSort: string) {
    this.sortingBy = newSort;
    switch(this.sortingBy){
      case 'team':
        this.allTeams = _.sortBy(this.allTeams, [function(o) { return o.name; }]);
        break;
      case 'locale':
      default:
        this.allTeams = _.sortBy(this.allTeams, [function(o) { return o.locale; }]);
        break;
    }
  }

  getTeams() {
    this.teamService.getTeams()
      .subscribe((data: Team[]) => {
        this.allTeams = data;
        this.updateSorting(this.defaultSort);
      });
  }

  ngOnInit() {
    this.getTeams();
  }

}
