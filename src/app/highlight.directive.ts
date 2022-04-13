import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.padding = '15px';
    el.nativeElement.style.borderRadius = '15px 2px 15px 2px';
    el.nativeElement.style.fontSize = '24px';
    el.nativeElement.style.boxShadow = '2px 2px 2px #000';
    el.nativeElement.style.textShadow = '2px 2px 2px #000';
  }
}
