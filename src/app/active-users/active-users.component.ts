import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-active-users',
  imports: [CommonModule],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent implements OnInit{
  //@Input() users: string[] = [];
  //@Output() userSetToInactive = new EventEmitter<number>();

  users: String[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id : number){
    //this.userSetToInactive.emit(id);
    this.usersService.setToInactive(id);
  }
}
