import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user1Activated: boolean = false;
  user2Activated: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.userActivated.subscribe(
      (idVal: number) => {
        if (idVal == 1) {
          this.user1Activated = true;
        }
        else if (idVal == 2) {
          this.user2Activated = true;
        }
      }
    )
  }

}
