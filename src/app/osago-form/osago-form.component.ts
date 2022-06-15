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

 
  
  ngOnInit(): void {
    this.form = new FormGroup({
      transportType: new FormControl(null),
      power: new FormControl(null),
      period: new FormControl(null),
  } )
  }
  get _transportType():string {
    return this.form.get('transportType')?.value;
  }
  get _power():string {
    return this.form.get('power')?.value;
  }
  get _period():string {
    return this.form.get('period')?.value;
  }
  onSubmit():void {
    Number(this._period)+Number(this._power)+Number(this._transportType);
  }
}
