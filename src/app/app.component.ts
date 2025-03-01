import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component'
import { FormsModule } from '@angular/forms'
import { CustomStyleDirective } from './dynamic-list/custom-directive/custom-style.directive';
import { BetterCustomStyleDirective } from './dynamic-list/better-custom-directive/better-custom-style.directive';
import { CustomIfNotDirective } from './custom-if-not-directive/custom-if-not.directive';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    DynamicListComponent,
    FormsModule,
    CustomStyleDirective,
    BetterCustomStyleDirective,
    CustomIfNotDirective,
    InactiveUsersComponent,
    ActiveUsersComponent,
    ]
    ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UsersService],
})
export class AppComponent {
  title = 'failingfrontend';

  //Example : Create a toggling div
  isDivVisible = false;
  changeVisibility(){
    this.isDivVisible = !this.isDivVisible;
  }

  // Example: Create custom structural directive
  serverCreationStatus = 'No server was created';
  testTWB = 'testServer';
  takeName = true;
  onCreateServer(){
    this.serverCreationStatus = 'Server was created: ' + this.testTWB;
    this.takeName = false;
  }

// Example: Parent child component interaction : UserService Feature
  activeUsers = ['Dipesh', 'Anna'];
  inactiveUsers = ['Chris', 'Axe'];

  onSetToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

}
