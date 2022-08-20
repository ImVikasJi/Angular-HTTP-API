import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular-HTTP-API';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
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
      complete: () => {console.log('Done Getting Users');}
        
      
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
      complete: () => {console.log('Done Getting User');}
    });
  }
}
