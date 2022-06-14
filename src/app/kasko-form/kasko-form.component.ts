import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KaskoControllerService } from '../api/services';

@Component({
  selector: 'app-kasko-form',
  templateUrl: './kasko-form.component.html',
  styleUrls: ['./kasko-form.component.css']
})
export class KaskoFormComponent implements OnInit {
  isClicked: boolean = true;
  form: any;
  constructor(private kaskoService: KaskoControllerService,
    private router: Router,
    private http:HttpClient) { }
 
  ngOnInit(): void {
    this.form = new FormGroup({

     
       addrRegistr: new FormControl(null),
       carMarka: new FormControl(null),
       classModelCar: new FormControl(null),
       dateCar: new FormControl(null),
       engine: new FormControl(null),
       bank: new FormControl(null),
       costCar: new FormControl(null),
       carPlace: new FormControl(null),
       amountUsers: new FormControl(null),
       name: new FormControl(null),
       phone: new FormControl(null)
      
       
    })
  }

  onClick():void{
    this.isClicked=!this.isClicked;
  }

  get _name():string {
    return this.form.get('name')?.value;
  }
  get _phone():string {
    return this.form.get('phone')?.value;
  }
  get _addrRegistr():string {
    return this.form.get('addrRegistr')?.value;
  }
  get _carMarka():string {
    return this.form.get('carMarka')?.value;
  }
  get _classModelCar():string {
    return this.form.get('classModelCar')?.value;
  }
  get _dateCar():string {
    return this.form.get('dateCar')?.value;
  }
  get _engine():string {
    return this.form.get('engine')?.value;
  }
  get _banke():string {
    return this.form.get('bank')?.value;
  }
  get _costCar():string {
    return this.form.get('costCar')?.value;
  }
  get _carPlace():string {
    return this.form.get('carPlace')?.value;
  }
  get _amountUsers():string {
    return this.form.get('amountUsers')?.value;
  
  }

  onSubmit(): void{
    // try {
      
    //   this.http.get("https://shielded-depths-97782.herokuapp.com/kasko",{observe: 'response'})
    //   .subscribe(response => {
    //     if(response.status == 200){

          this.kaskoService.sendMsgToMail({registrAddress:this._addrRegistr,
             markaCar:this._carMarka,
            markaModelClass:this._classModelCar,
             dateCar:this._dateCar,
             engineCapacity:this._engine,
            bank:this._banke, carCost:this._costCar,
             carPlace:this._carPlace,
              userData:this._amountUsers,
            name:this._name, phone:this._phone
          }).subscribe()
        }   
    //   }, error=>{
    //     alert("Ошибка сервера");
    //     console.log(error);
    //   });
    // } catch(err:any) {
    //   alert("Возникла ошибка регистрации попробуйте позже");
    //   console.log(err)
    // }
  // }
} 


