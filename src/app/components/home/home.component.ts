import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '75%',
        // display: 'block'
        visibility: 'visible'
      })),
      state('closed', style({
        width: 0,
        // display: 'none'
        visibility: 'hidden'
      })),
      transition('closed => open', [
        animate('250ms ease')
      ]),
      transition('open => closed', [
        animate('200ms ease')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    console.log(this.isOpen);
    this.isOpen = !this.isOpen;
  }



}
