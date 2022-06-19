import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IpotekaControllerService } from '../api/services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {
  form: any;

  constructor(private ipotekaService: IpotekaControllerService,
     private http:HttpClient,
     private fb: FormBuilder ) { }
     items: any[] = [
      { id: 1, name: 'Квартира / Апартаменты' },
      { id: 2, name: 'asdf' },
    ];
  
  ngOnInit(): void {
    this.form = new FormGroup({
      bank: new FormControl(null),
      remains: new FormControl(null),
      objectInsurance: new FormControl(null),

      propertyObject: new FormControl(null),
     
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null),
      name: new FormControl(null),
      datebirth: new FormControl(null),
      liveHealth: new FormControl(null),
   })
  
  }
  get _bank():string {
    return this.form.get('bank')?.value;
  }
  get _remains():string {
    return this.form.get('remains')?.value;
  }
  get _liveHealth():boolean {
    return this.form.get('liveHealth')?.value;
  }

  get _propertyHouse():string {
    return this.form.get('propertyObject')?.value;
  }
  
  get _objectInsurance():boolean {
    return this.form.get('objectInsurance')?.value;
  }
  get _email():string {
    return this.form.get('email')?.value;
  }
  get _phone():string {
    return this.form.get('phoneNumber')?.value;
  }
  get _name():string {
    return this.form.get('name')?.value;
  }
  get _datebirth():string {
    return this.form.get('datebirth')?.value;
  }
    
   propertyObj: string[] = ['Жизнь и здоровье','Недвижимость']
   prObj = '';
  onSubmit (): void {
    if (this._liveHealth && this._liveHealth){
      this.prObj = this.propertyObj[0]+' и ' + this.propertyObj[1]
      
    }
    else if (  this._liveHealth) {
      this.prObj = this.propertyObj[0]
    }
    else if(this._propertyHouse) {
      this.prObj = this.propertyObj[1]
    }
    else {
        
    }
    this.ipotekaService.sendMsgToMail({bank:this._bank,
      remains: this._remains,
       insuranceObject: this.prObj,
        propertyHouse: this._propertyHouse,
       name: this._name,
       dateBirth: this._datebirth,
       phoneNumber:this._phone,
        email:this._email}).subscribe()
   console.log(this._propertyHouse, 
     this._bank,
     this._datebirth, 
     this._email,
      this._remains,
     this._name,
      this._phone,
      this.prObj,
       this._remains);
   alert("Ваша заявка отправлена");
  //   this.http.get("https://insurance-web-college.herokuapp.com/ipoteka",{observe: 'response'})
  //   .subscribe(response => {
  //     if(response.status == 200){
      

  //     }   
  //   }, error=>{
  //     alert("Ошибка сервера");
  //     console.log(error);
  //   });
  // } catch(err:any) {
  //   alert("Возникла ошибка регистрации попробуйте позже");
  //   console.log(err)
  }
 

   
}
