import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: string = 'A';
  constructor() { }
  @Input() user: string = '';
  @Output() onSubmit = new EventEmitter();
  ngOnInit(): void {

  }
  onShow() {
  
  }

}
