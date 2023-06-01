import { Directive, HostBinding } from "@angular/core";


@Directive({
  selector: '[lightMode]'
})
export class ToggleModeDirective {

  @HostBinding('class.lightMode') lightMode = false;
}
