import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToSection]'
})
export class ScrollToSectionDirective {
  @Input() targetSection: string;
  @HostListener('click', ['$event']) click () { this.onClick() }
  @HostListener('touch', ['$event']) touch () { this.onClick() }

  constructor() { }

  onClick () {
    let x = document.querySelector(this.targetSection);
    if (x) { 
      try {
        x.scrollIntoView({ behavior: "smooth", block: "start"});
      } catch (e) {
        x.scrollIntoView();
      }
    }
  }

}
