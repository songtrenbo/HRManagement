import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '../models/token.model';
import { Observable } from 'rxjs';
import Endpoints from '../constants/endpoints';
import jwt_decode from 'jwt-decode';


const apiUrl = `${Endpoints.urlBackend}/users`;
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient
  ) {}

  existToken() {
    const token: string = this.cookieService.get('Token');
    if (!token) {
      return null;
    }
    const tokenData: Token = this.getDecodedAccessToken(token) as Token;
    if (tokenData && Math.floor(new Date().getTime() / 1000) < tokenData.exp) {
      return tokenData;
    } else if (
      tokenData &&
      Math.floor(new Date().getTime() / 1000) >= tokenData.exp
    ) {
      this.cookieService.delete('Token');
      this.refreshToken(tokenData.userId).subscribe({
        next: (Response: any) => {
          this.cookieService.set('Token', Response.token);
        },
        error: (error: any) => {
          this.cookieService.delete('Token');
        },
      });
      this.existToken();
    }
    return null;
  }

  private refreshToken(userId: string): Observable<any> {
    return this.httpClient.get(apiUrl + `/refreshToken/${userId}`);
  }

  getUserId(): string {
    const token: Token = this.existToken()!;
    console.log(token.userId);
    return token.userId;
  }

  private getDecodedAccessToken(token: string) {
    try {
      return jwt_decode(token);
    } catch (Error) {}
  }

  httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + this.cookieService.get('Token'),
      }),
    };
  }
}
