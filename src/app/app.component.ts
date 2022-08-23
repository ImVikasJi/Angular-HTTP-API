import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular-HTTP-API';

  private user: User = {
    id: 5,
    name: 'Vikas Singh Bhadoriya',
    username: 'Badri',
    email: 'Sincere@gmail.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.onGetUsers();
    // this.onGetUser();
    this.onUpdateUser();
    this.ondeleteUser();
    this.onGetFileType();
    
  }

  // To get all the users form Json PlaceHolder APi
  onGetUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('Done Getting Users');
      },
    });
  }

  // To get only one user form Json PlaceHolder APi
  onGetUser() {
    this.userService.getUser().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('Done Getting User');
      },
    });
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('Done Creating User');
      },
    });
  }

  onUpdateUser() {
    this.userService.updateUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('Done updating the user');
      },
    });
  }

  ondeleteUser() {
    this.userService.deleteUser(5).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('Done deleting the user');
      },
    });
  }

  onGetFileType(){
    this.userService.getFileType().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('Done getting the file Type');
      },
    })
  }
}
