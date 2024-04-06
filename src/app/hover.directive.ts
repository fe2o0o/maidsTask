import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() appHover = ''
  constructor(private Element: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.Element.nativeElement.classList.add(this.appHover);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.Element.nativeElement.classList.remove(this.appHover)
  }


}
