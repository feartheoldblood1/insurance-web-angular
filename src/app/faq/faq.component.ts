import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }
  isClicked: boolean = true;
  isClicked2Quest: boolean = true;
  isClicked5Quest: boolean = true;
  isClicked4Quest: boolean = true;
  ngOnInit(): void {
  }
  onClick():void{

  }
  toggleQuestion(): void {
    this.isClicked = !this.isClicked;
   
  }
  toggleQuestion2():void{
    this.isClicked2Quest =!this.isClicked2Quest;
  }
  toggleQuestion4():void{
    this.isClicked4Quest =!this.isClicked4Quest;
  }
  toggleQuestion5():void{
    this.isClicked5Quest =!this.isClicked5Quest;
  }

}
