import { Injectable } from '@angular/core';
import Endpoints from '../constants/endpoints';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

const apiUrl = `${Endpoints.urlBackend}/users`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<User>{
    return this.httpClient.post<User>(apiUrl + '/login',user);
  }
  
}
