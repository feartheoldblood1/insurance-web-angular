import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: string = 'A';
  constructor() { }
  @Input() user: string = '';

  ngOnInit(): void {

  }
  onShow() {
  
  }

}
