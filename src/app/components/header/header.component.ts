import { Component, HostListener, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './header-animation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ SlideInOutAnimation ]
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router) {}

  animationState: boolean = false;
  showBtnX: boolean = false;


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
    this.showBtnX = true;
  }

  @HostListener('window:resize', ['$event'])
  goTo(route: string) {
    if(window.innerWidth < 768) {
      this.animationState = false;
      this.showBtnX = false;
    }
    this.router.navigateByUrl(route)
  }
}
