import {Directive, Renderer2, ElementRef, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[betterCustomStyle]'
})

export class BetterCustomStyleDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'inline-block');
  }

  //Example : Using HostListener to listen to any events on the element
  @HostListener('mouseenter') onMouseHover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.2)');
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
  }

}
