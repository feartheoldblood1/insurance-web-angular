import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-entity',
  templateUrl: './legal-entity.component.html',
  styleUrls: ['./legal-entity.component.css']
})
export class LegalEntityComponent implements OnInit {

  constructor() { }
  isClicked: boolean = true;
  buttonText: string = 'Узнать больше'
  ngOnInit(): void {
   
  }
  onMouseHover():void{
    this.isClicked = !this.isClicked;
    if(!this.isClicked){
      this.buttonText = 'Скрыть'
    } else {
      this.buttonText = 'Узнать больше'
    }
  
  }
}
