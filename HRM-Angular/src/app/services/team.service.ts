import { Injectable } from '@angular/core';
import Endpoints from '../constants/endpoints';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team.model';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

const apiUrl = `${Endpoints.urlBackend}/teams`;
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  getAllTeam(): Observable<Team[]>{
    return this.httpClient.get<Team[]>(apiUrl + '/',this.tokenService.httpOptions());
  }
}
