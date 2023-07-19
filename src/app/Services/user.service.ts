import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(page: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<User[]>(
      `http://localhost:8080/users/page/${page}`,
      options
    );
  }

  insertOperator(user: User) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'No Auth'),
    };

    return this.http.post<User>(
      `http://localhost:8080/users/signup/`,
      user,
      options
    );
  }

  insertAdmin(user: User) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.post<User>(`http://localhost:8080/users/`, user, options);
  }

  deleteUser() {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.delete(
      `http://localhost:8080/users/${localStorage.userId}`,
      options
    );
  }

  adminDeleteUser(id: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.delete(`http://localhost:8080/users/${id}`, options);
  }
}
