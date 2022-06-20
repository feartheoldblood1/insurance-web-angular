import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { elementAt } from 'rxjs';
import {OsagoControllerService} from '../api/services/osago-controller.service';
export type driver = {
  id: number,
  age: number
  experience: number,
  withoutAccident: number
}
export type Car = {
  typeCar: string,
  powerCar: number
}
export type policy = {
  type: number,
  startDate: Date,
  endDate: Date,
  object: Car,
}

@Component({
  selector: 'app-osago-form',
  templateUrl: './osago-form.component.html',
  styleUrls: ['./osago-form.component.css']
})


export class OsagoFormComponent implements OnInit {
  form: any;
  formBuy: any;
  isFormBuyClicked = false;
  constructor(private osagoService: OsagoControllerService) { }
  web3: any;
  accounts: Array<String> | undefined;
  isClicked: boolean = false;
  isDriverClicked: boolean = false;
  iterator: number = 2;
  isChangable: boolean = false;
  places: any[] = [
    { nameRegion: "Тверская область", koef: 1.40 },
    { nameRegion: "Московская область", koef: 1.56 },
    { nameRegion: "Санкт-Петербург", koef: 1.64 },
    { nameRegion: "Кировская область", koef: 1.32 },
    { nameRegion: "Новгородская область", koef: 1.64 },

  ]
  powers: any [] = [
    {namePower:"до 50 включительно", koef: 0.6},
    {namePower:"свыше 50 до 70 включительно", koef: 1.0},
    {namePower:"свыше 70 до 100 включительно", koef: 1.1},
    {namePower:"свыше 100 до 120 включительно", koef: 1.2},
    {namePower:"свыше 120 до 150 включительно", koef: 1.4},
    {namePower:"свыше 150", koef: 1.6},
  ]
  experiences: any [] = [
    {column: 0, columnName:"0"},
    {column: 1, columnName:"1"},
    {column: 2, columnName:"2"},
    {column: 3, columnName:"3-4"},
    {column: 4, columnName:"5-6"},
    {column: 5, columnName:"7-9"},
    {column: 6, columnName:"10-14"},
    {column: 7, columnName:"Больше 14"},
  ]
  ages: any [] = [
    {column: 0, columnName:"16-21"},
    {column: 1, columnName:"22-24"},
    {column: 2, columnName:"25-29"},
    {column: 3, columnName:"30-34"},
    {column: 4, columnName:"35-39"},
    {column: 5, columnName:"40-49"},
    {column: 6, columnName:"50-59"},
    {column: 7, columnName:"Больше 59"},
  ]
  koefsAgeExperience: number = 0;
  koefsAgeExperienceArr: any [][] = [
    [1.93,1.9, 1.87, 1.66, 1.64, 0, 0, 0],
    [1.79,1.77, 1.76, 1.08, 1.06, 1.06, 0],
    [1.77,1.68, 1.61, 1.06, 1.05, 1.05, 1.01, 0],
    [1.62,	1.61,	1.59,	1.04,	1.04,	1.01,	0.96,	0.95],
    [1.61,	1.59,	1.58,	0.99,	0.96,	0.95,	0.95,	0.94],
    [1.59,	1.58,	1.57,	0.95,	0.95,	0.94,	0.94,	0.94],
    [1.58,	1.57,	1.56,	0.94,	0.94,	0.94,	0.94,	0.93],
    [1.55,	1.54,	1.53,	0.92,	0.91,	0.91,	0.91,	0.90]
]
findKoefAgeExperience (ageIndx: number, expIndx:number): number {
  this.koefsAgeExperience = this.koefsAgeExperienceArr[ageIndx][expIndx];
  return this.koefsAgeExperience;
}
  drivers: { id: number, age: number, experience: number, withoutAccident: number }[] = [
    { id: 1, age: 18, experience: 1, withoutAccident: 1 }

  ];

  isBuyBtnClicked: boolean = false;
  formulaAnswer: number = 0;
  ngOnInit(): void {
    this.form = new FormGroup({
      transportType: new FormControl(null, Validators.required),
      power: new FormControl(null, Validators.required),
      period: new FormControl(null, Validators.required),
      region: new FormControl(null, Validators.required),
      age: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{2}"),Validators.maxLength(2)]),
      experience: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{2}"), Validators.maxLength(2)] ),
      withoutAccident: new FormControl(null, Validators.required),
    })
    this.formBuy = new FormGroup({


      addrRegistr: new FormControl(null, Validators.required) ,
      carMarka: new FormControl(null, Validators.required),
      classModelCar: new FormControl(null, Validators.required),
      dateCar: new FormControl(null, Validators.required),

 
      carPlace: new FormControl(null),
     
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.pattern("[0-9]{10}"),Validators.required])


    })
  }

  regionName: string = ''; 
  getRegionName(regionValue: any): string {
    this.places.forEach(element => {
      if(element.koef == Number(regionValue)){
        this.regionName = element.nameRegion;

      }
     
    });
    return this.regionName;
  }
  powerName: string = '';
  getPowerEngine(powerValue: any): string {
    this.powers.forEach(element => {
      if(element.koef == Number(powerValue)){
        this.powerName = element.namePower;

      }
     
    });
    return this.powerName;
  }



  get _experience(): string {
    return this.form.get('experience')?.value
  }
  get _age(): string {
    return this.form.get('age')?.value
  }
  get _withoutAccident(): string {
    return this.form.get('withoutAccident')?.value
  }
  get _region(): string {
    return this.form.get('region')?.value;
  }
  get _transportType(): string {
    return this.form.get('transportType')?.value;
  }
  get _power(): string {
    return this.form.get('power')?.value;
  }
  get _period(): string {
    return this.form.get('period')?.value;
  }



  get _name():string {
    return this.formBuy.get('name')?.value;
  }
  get _phone():string {
    return this.formBuy.get('phone')?.value;
  }
  get _addrRegistr():string {
    return this.formBuy.get('addrRegistr')?.value;
  }
  get _carMarka():string {
    return this.formBuy.get('carMarka')?.value;
  }
  get _classModelCar():string {
    return this.formBuy.get('classModelCar')?.value;
  }
  get _dateCar():string {
    return this.formBuy.get('dateCar')?.value;
  }
 
 
  get _carPlace():string {
    return this.formBuy.get('carPlace')?.value;
  }
  
  addUser(): void {
    this.drivers.push({ id: this.iterator++, age: 18, experience: 1, withoutAccident: 1 })
  }
  delUser(): void {
    if (this.iterator >= 2) {
      this.drivers.pop()

    }
    this.iterator = 2;


  }
  findMax(drivers: driver[]): number {
    return drivers.reduce((acc, curr) => acc.withoutAccident > curr.withoutAccident ? acc : curr).withoutAccident;
  }
  updateDrivers(drivers: driver[]): number {
    let maxFirstWA: number = this.findMax(this.drivers);
    if (maxFirstWA >= Number(this._withoutAccident))
      return maxFirstWA;
    else {
      return Number(this._withoutAccident);
    }
  }

  osagoPolicy: policy = {
    type: 1, startDate: new Date('1970-01-01'), endDate: new Date('1970-01-08'),
    object: {
      typeCar: 'Легковое',
      powerCar: 0
    }
  };

  getSum(transportType: number, power: number, period: number, region: number, maxYearWithoutAccident: number, koefAgeExp: number): number {
    let mainPart: number = region * transportType * power * period;
    if (this.isDriverClicked) {
      this.formulaAnswer = mainPart * koefAgeExp * maxYearWithoutAccident;
    } else {
      this.formulaAnswer = mainPart;
    }
    return Math.round(this.formulaAnswer);

  }
  onBuyBtn(): void {
    this.isBuyBtnClicked = true;
  }

  onSubmit(): number {
    let maxYearWithoutAccident = this.updateDrivers(this.drivers)
    let ageExp = this.findKoefAgeExperience(Number(this._age), Number(this._experience))
    return  Math.round(this.getSum(Number(this._transportType), Number(this._power), Number(this._period), Number(this._region), maxYearWithoutAccident, ageExp))
  }
  toggleDrivers(): void {
    this.isDriverClicked = !this.isDriverClicked;

  }
  toggleFormula(): void {
    this.isClicked = true;
  }
  clickedForm(): void {
    this.isFormBuyClicked = !this.isFormBuyClicked;
  }
  onSubmitFormBuy(): void {
    this.osagoService.sendMsgToMail({
      registrAddress:this._addrRegistr,
      markaCar:this._carMarka,
     markaModelClass:this._classModelCar,
      dateCar:this._dateCar,
      engineCapacity:this.powerName.toString(),
      carPlace:this.regionName.toString(),
     
     name:this._name,
      phone:this._phone
   }).subscribe()
 }   
  
}
