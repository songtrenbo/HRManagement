import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';
import { SubscriptionLike } from 'rxjs';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';
import { Token } from 'src/app/models/token.model';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  subscription: SubscriptionLike | undefined;
  user: User = new User('','','','','','','','',new Date(),'','',[],'');
  token: Token = new Token('', '', '','', 0, 0);;
  constructor(private userService: UserService, private tokenSerivce: TokenService, private cookiesService: CookieService, private router: Router){}
  ngOnInit(): void {}

  login() {
    this.subscription = this.userService.login(this.user).subscribe({
      next: (response: User) => {
        console.log(response.token);
        this.cookiesService.set('Token', response.token);
        this.token = this.tokenSerivce.existToken()!;
        if(this.token.role === 'admin' || this.token.role === 'leader'){
          this.router.navigate(["/manage"]);
        }
        else{
          this.router.navigate(['/home']);
        }
      },

      error: (error: any) => {
        if (error.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Wrong username or password',
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: error,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      },
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
