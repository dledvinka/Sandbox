import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../entities/user-dto';
import { Observable } from 'rxjs';
import { UserRO } from '../entities/user-ro';
import { tap, map } from 'rxjs/operators';

export const TOKEN_STORAGE_KEY = 'ENERGY_USER_TOTEN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    console.log(token);
    return token !== null;
  }

  login(user: UserDto): Observable<boolean> {
    return this.http.post<UserRO>('/auth/login', user)
      .pipe(
        tap((u: UserRO) => {
          console.log('login RO', u);
          if (u && u.token) {
            console.log('setItem', u);
            localStorage.setItem(TOKEN_STORAGE_KEY, u.token);
          }
        }),
        map((u: UserRO) => {
          if (u && u.token) {
            return true;
          } else {
            return false;
          }
        }));
  }

  register(user: UserDto): Observable<boolean> {
    return this.http.post<UserRO>('/auth/register', user)
      .pipe(
        tap((u: UserRO) => { }),
        map((u: UserRO) => true));
  }

  logout() {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }
}
