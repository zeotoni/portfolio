import { Component, HostListener, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './header-animation';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ SlideInOutAnimation ]
})
export class HeaderComponent implements OnInit{

  animationState: boolean = false;

  ngOnInit(): void {
    if(window.innerWidth >= 768) {
      this.animationState = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if(window.innerWidth >= 768) {
      this.animationState = true;
    } else {
      this.animationState = false;
    }
  }

  toggleShowUl() {
    this.animationState = !this.animationState;
  }
}
