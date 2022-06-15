import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-osago-form',
  templateUrl: './osago-form.component.html',
  styleUrls: ['./osago-form.component.css']
})
export class OsagoFormComponent implements OnInit {
  form:any;
  constructor() { }
  web3: any;
  accounts: Array<String> | undefined;
  isClicked: boolean = false;
  drivers: {id:number, age:number, experience: number, withoutAccident:number}[] = [
    { id: 1, age: 18, experience: 5, withoutAccident:10},
  ];
  formulaAnswer:number = 0;
  ngOnInit(): void {
    this.form = new FormGroup({
      transportType: new FormControl(null),
      power: new FormControl(null),
      period: new FormControl(null),
  } )
  }
  // addUser():void {
  //   this.drivers.push({})
  // }
  get _transportType():string {
    return this.form.get('transportType')?.value;
  }
  get _power():string {
    return this.form.get('power')?.value;
  }
  get _period():string {
    return this.form.get('period')?.value;
  }
  getSum(transportType: number, power: number, period: number):string {
    this.formulaAnswer = transportType*power*period;
    return this.formulaAnswer.toString();
  }
  onSubmit():void {
    this.getSum(Number(this._period),Number(this._power),Number(this._transportType));
  }
  toggleFormula():void {
    this.isClicked = true;
  }
}
