import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-inactive-users',
  imports: [CommonModule],
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent implements OnInit {
  //@Input() users: string[] = [];
  // This is the event that will be emitted and should match to the event binding provided
  //@Output() userSetToActive = new EventEmitter<number>();

  users: String[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id : number){
    //this.userSetToActive.emit(id);
    this.usersService.setToActive(id);
  }
}


//  Binding in HTML
//  $Output-Decorator-Event-Name = Handler-Method
//  (userSetToActive)="onSetToActive($event)"></app-inactive-users>
