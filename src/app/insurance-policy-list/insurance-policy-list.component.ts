import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-insurance-policy-list',
  templateUrl: './insurance-policy-list.component.html',
  styleUrls: ['./insurance-policy-list.component.css'],
  animations: [
    trigger('showBtn',[
      state('open', style({
        opacity: 0,
      })),
      state('closed', style({
        opacity: 1,
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class InsurancePolicyListComponent implements OnInit {
  longText = `Medical Insurance`;
  isShownCar: boolean;
  isShownIpoteka: boolean;
  isShownDMC: boolean;
  isShownJourney: boolean;
  isShownAccident: boolean;
  constructor() {
    this.isShownCar = true;
    this.isShownIpoteka = true;
    this.isShownDMC = true;
    this.isShownJourney = true;
    this.isShownAccident = true;
  }
  
  ngOnInit(): void {
  }
}


