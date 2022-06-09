import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {

  constructor() { }
  isClicked: boolean = true;
  ngOnInit(): void {
  }

  changeDate():void{
    this.isClicked = !this.isClicked;
  }
}
