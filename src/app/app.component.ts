import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DynamicListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'failingfrontend';

  //Example : Create a toggling div
  isDivVisible = false;
  changeVisibility(){
    this.isDivVisible = !this.isDivVisible;
  }

  //
  serverCreationStatus = 'No server was created';
  testTWB = 'testServer';
  takeName = true;
  onCreateServer(){
    this.serverCreationStatus = 'Server was created: ' + this.testTWB;
    this.takeName = false;
  }


}
