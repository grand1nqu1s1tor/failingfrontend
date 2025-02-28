import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dynamic-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.css'
})
export class DynamicListComponent {
  newInput: string = '';
  listOfWords: string[] = ['Dynamic', 'List', 'Example'];

  addToList(){
    this.listOfWords.push(this.newInput);
    this.newInput = '';
  }

  removeFromList(){
  }

  //Question : Only show odd elements
  numList: number[] = [1, 2, 4, 7, 9, 10];
  addedNum: number | null = null;

  showOddNumbers(): number[]{
    return this.numList.filter(num => num % 2 === 1);
  }
  addNumber(){
    if (this.addedNum !== null) {
      // Spread the list, add the number and reassingn to the variable to trigger change
      this.numList = [...this.numList, this.addedNum];
      this.addedNum = null;
    }
  }

}
