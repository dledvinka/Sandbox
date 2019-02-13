import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserDto } from '../entities/user-dto';
import { UserRO } from '../entities/user-ro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = 'dledvinka';
  password = 'naska';

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  tryLogin() {
    const user: UserDto = { username: this.email, password: this.password };
    this.auth.login(
      user
    )
      .subscribe(
        (isLoggedIn) => {
          if (isLoggedIn) {
            this.router.navigateByUrl('/supply-points');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

}
