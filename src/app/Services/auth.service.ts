import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  authenticate(user: User) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Basic cmFtcFVwOjEyMw=='),
    };

    let params = new HttpParams()
      .set('username', user.email)
      .set('password', user.password)
      .set('grant_type', 'password');

    return this.http.post('http://localhost:8080/oauth/token', params, options);
  }

  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }

  isAuthenticated() {
    let token = localStorage.getItem('token');

    if (token != null) {
      return !this.jwtService.isTokenExpired(token);
    }

    return false;
  }

  isAdmin(): boolean {
    let tokenContent: any = JSON.parse(
      atob(localStorage.getItem('token').split('.')[1])
    );

    if (tokenContent.authorities == 'Admin') {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.clear();
  }
}
