import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customStyle]'
})

export class CustomStyleDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
   }

   ngOnInit() {
     this.elementRef.nativeElement.style.color = 'green';
   }
}

//1.) Use ElementRef to grab the element that the directive is applied on
//2.) Use the nativeElement property to access the DOM element
//3.) Use the style property to set the color

//DISCLAIMER: NOT A GOOD THING TO ACCESS ELEMENT PROPERTIES DIRECTLY
