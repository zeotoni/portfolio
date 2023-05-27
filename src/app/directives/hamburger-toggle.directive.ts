import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appHamburgerToggle]'
})
export class HamburguerToggleDirective {

  @HostBinding('class.is-active')
  isActive = false;

  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
