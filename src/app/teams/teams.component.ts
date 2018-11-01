import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { OWLTEAMS } from '../teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  mockteam: Team = {
    locale: 'vancouver',
    name: 'skaters',
    colors: [],
  };

  allteams = OWLTEAMS;

  constructor() { }

  ngOnInit() {
  }

}
