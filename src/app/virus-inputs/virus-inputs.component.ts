import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virus-inputs',
  templateUrl: './virus-inputs.component.html',
  styleUrls: ['./virus-inputs.component.css']
})
export class VirusInputsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
    alert("Приносим свои извинения, услуга обязательно заработает в скором времени. ")
  }
}
