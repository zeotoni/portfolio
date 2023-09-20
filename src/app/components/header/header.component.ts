import { Component, HostListener, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './header-animation';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, map } from 'rxjs';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ SlideInOutAnimation ]
})
export class HeaderComponent implements OnInit{

  constructor(
    private router: Router,
    private scroller: ViewportScroller
  ) {}

  animationState: boolean = false;
  showBtnClose: boolean = false;


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
    this.showBtnClose = true;
  }

  @HostListener('window:resize', ['$event'])
  goTo(route: string) {
    if(window.innerWidth < 768) {
      this.animationState = false;
      this.showBtnClose = false;
    }

    this.scroller.scrollToAnchor(route);
  }
}
