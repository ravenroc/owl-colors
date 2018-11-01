import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Team } from './team';
import { OWLTEAMS } from './teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsUrl = 'https://raw.githubusercontent.com/ravenroc/owl-colors/master/data/colors.json';
  allTeams: Team[];


  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<Team[]> {
    return of(OWLTEAMS);
  }

  // getTeams(): Observable<Team[]> {
  //   return this.http.get<Team[]>(this.teamsUrl)
  //     .subscribe(
  //       data => {
  //         this.allTeams = data as Team[];
  //       }
  //     );
  // }
}
