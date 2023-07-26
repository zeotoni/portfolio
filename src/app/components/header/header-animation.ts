import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
      state('in', style({
          'max-height': '100vh', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
          'max-height': '0', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
          animate('900ms ease-in-out', style({
              'opacity': '0'
          })),
          animate('900ms ease-in-out', style({
              'max-height': '0'
          })),
          animate('900ms ease-in-out', style({
              'visibility': 'hidden'
          }))
      ]
      )]),
      transition('out => in', [group([
          animate('1ms ease-in-out', style({
              'visibility': 'visible'
          })),
          animate('900ms ease-in-out', style({
              'max-height': '100vh'
          })),
          animate('1000ms ease-in-out', style({
              'opacity': '1'
          }))
      ]
      )])
  ]),
]
