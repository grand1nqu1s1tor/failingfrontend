import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component'
import { FormsModule } from '@angular/forms'
import { CustomStyleDirective } from './dynamic-list/custom-directive/custom-style.directive';
import { BetterCustomStyleDirective } from './dynamic-list/better-custom-directive/better-custom-style.directive';
import { CustomIfNotDirective } from './custom-if-not-directive/custom-if-not.directive';

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
    ]
    ,
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
