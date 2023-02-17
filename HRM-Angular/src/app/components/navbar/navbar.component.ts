import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from 'src/app/models/token.model';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  token: Token = new Token('', '', '', '', 0, 0);
  constructor(private tokenSerivce: TokenService, private cookiesService: CookieService, private router: Router){}
  ngOnInit(): void {
    this.isLogin();
    if(!this.isLogin() || !this.isManage()){
      this.router.navigate(['/login']);
    }
  }
  isLogin(): Token{
    this.token = this.tokenSerivce.existToken()!;
    return this.token;
  }
  isManage(): Boolean{    
    if(this.token.role === 'admin' || this.token.role === 'leader'){
      return true;
    }
    return false;
  }

  logOut(): Token {
    try {
      this.cookiesService.delete('Token');
      this.router.navigate(['/login']);
      return (this.token = new Token('', '', '', '',0, 0));
    } catch (err) {
      return this.token;
    }
  }
}
