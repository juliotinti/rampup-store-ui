import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: string;
  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<User>(
      `http://localhost:8080/users/login/${user.email}`,
      options
    );
  }

  getIds(id: any, customerId: any) {
    localStorage.setItem('userId', id);
    localStorage.setItem('customerId', customerId);
  }
}
