import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';
import { SubscriptionLike } from 'rxjs';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  subscription: SubscriptionLike | undefined;
  user: User = new User('','','','','','','','',new Date(),'','',[],'');
  constructor(private userService: UserService, private cookiesService: CookieService, private router: Router){}
  ngOnInit(): void {}

  login() {
    this.subscription = this.userService.login(this.user).subscribe({
      next: (response: User) => {
        this.cookiesService.set('Token', response.token);
        this.router.navigate(["/manage"]);
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
