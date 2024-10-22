import { AfterContentInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[highlightLongNameHero]',
  standalone: true
})
export class HighlightDirective implements AfterContentInit {

  constructor(private element: ElementRef) {
  }
  
  ngAfterContentInit() {
    if (this.element.nativeElement.innerText.length > 10) {
      this.element.nativeElement.style.backgroundColor = 'aquamarine';
    }
  }

}
