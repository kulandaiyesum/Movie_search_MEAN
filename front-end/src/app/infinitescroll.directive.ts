import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appInfinitescroll]',
})
export class InfinitescrollDirective {
  @Output() scrolled = new EventEmitter<void>();
  private lastScrollPosition = 0;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const documentHeight = document.body.clientHeight;
    this.lastScrollPosition = scrollY;
    if (windowHeight + scrollY >= documentHeight) {
      this.scrolled.emit();
    }
  }

  restoreScrollPosition() {
    window.scrollTo(0, this.lastScrollPosition);
  }
}
