import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LegelentityControllerService } from '../api/services';
@Component({
  selector: 'app-legal-property',
  templateUrl: './legal-property.component.html',
  styleUrls: ['./legal-property.component.css']
})
export class LegalPropertyComponent implements OnInit {
  form: any;
  constructor(private legalEntity: LegelentityControllerService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      companyName: new FormControl(null),
      companyAddress: new FormControl(null),
      INN: new FormControl(null),
      region: new FormControl(null),
      
      surname: new FormControl(null),
      name: new FormControl(null),
      otchestvo: new FormControl(null),
      phone: new FormControl(null),
    
  })
  
}

get _email():string {
  return this.form.get('email')?.value;
}
get _companyName():string {
  return this.form.get('companyName')?.value;
}

get _companyAddress():string {
  return this.form.get('companyAddress')?.value;
}
get _INN():string {
  return this.form.get('INN')?.value;
}
get _region():string {
  return this.form.get('region')?.value;
}
get  _surname():string {
  return this.form.get('surname')?.value;
}
get  _name():string {
  return this.form.get('name')?.value;
}

get _otchestvo():string {
  return this.form.get('otchestvo')?.value;
}
get _phone():string {
  return this.form.get('phone')?.value;
}

onSubmit(): void{
  try {
    console.log(this.legalEntity.sendMsgToMail({companyName: this._companyName,
      addres: this._companyAddress, INN: this._INN, region:this._region,
      surname: this._surname,name: this._name,otchestvo: this._otchestvo,
      email: this._email, phone: this._phone
         }).subscribe())
         alert("Мы рассмотрим вашу заявку и моментально свяжемся с вами")
  } catch(err: any) {
    console.log(err)
  }

}
}