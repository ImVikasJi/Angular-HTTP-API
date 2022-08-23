import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // To fetch all Users
  getUsers(): Observable<HttpEvent<User[]>>{
    //HTTP Headers
    let myHeaders: any = new HttpHeaders({
      myHeader: ['This is Vikas Header', 'another header value'],
    });
    myHeaders = myHeaders.set('id', '2211543');
    myHeaders = myHeaders.append('id', '102141');

    // HTTP Params
    let myParams: any = new HttpParams().set('page', '5').set('sort', 'true');
    myParams = myParams.append('web-connect', 'true');
    return this.http.get<User[]>(`${environment.apiUrl}/users`, {
      observe : 'events'
    });
  }

  // To get the file type on console
  getFileType():Observable<string>{
    return this.http.get(`assets/file.txt`,{
      responseType: 'text'
    })
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
