import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  inactiveUsers: string[] = ['Max', 'Anna'];
  activeUsers: string[] = ['Manu', 'Christopher'];

  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
