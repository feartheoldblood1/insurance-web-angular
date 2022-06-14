import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kasko-form',
  templateUrl: './kasko-form.component.html',
  styleUrls: ['./kasko-form.component.css']
})
export class KaskoFormComponent implements OnInit {

  constructor() { }
  isClicked: boolean = true;
  ngOnInit(): void {
    
  }
  onClick():void{
    this.isClicked=!this.isClicked;
  }

}
