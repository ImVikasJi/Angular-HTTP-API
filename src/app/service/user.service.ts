import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, retry, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly defaultImage = 'https://robohash.org';

  constructor(private http: HttpClient) {}

  // To fetch all Users
  /* Commented this method and working with another method */
  // getUsers(): Observable<HttpEvent<User[]>>{
  //   //HTTP Headers
  //   let myHeaders: any = new HttpHeaders({
  //     myHeader: ['This is Vikas Header', 'another header value'],
  //   });
  //   myHeaders = myHeaders.set('id', '2211543');
  //   myHeaders = myHeaders.append('id', '102141');

  //   // HTTP Params
  //   let myParams: any = new HttpParams().set('page', '5').set('sort', 'true');
  //   myParams = myParams.append('web-connect', 'true');
  //   return this.http.get<User[]>(`${environment.apiUrl}/users`, {
  //     observe : 'events'
  //   });
  // }

  /* Learnt about rxjs operators like map, tap 
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(
      tap((users) => console.log(users)),
      map((users) =>
        users.map((user) => ({
          ...user,
          name: user.name.toUpperCase(),
          username: user.username.toLowerCase(),
          isAdmin: user.id === 10 ? console.log('isAdmin is True'):console.log('isAdmin is False'),
          image: `${this.defaultImage}/${user.username.toLowerCase()}`
        }))
      )
    );
  }  */

  // Using catchError we don't show it on Console we kinda handle it
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(         
      catchError((error) =>{
        return of([]);
      })
    )
  }
  // To get the file type on console
  getFileType(): Observable<string> {
    return this.http.get(`assets/file.txt`, {
      responseType: 'text',
    });
  }

  // To fetch single User
  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/1`);
  }

  // To create User
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, user);
  }

  //To update User
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users/${user.id}`, user);
  }

  //To delete User
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/users/${id}`);
  }
}
