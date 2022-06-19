import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { elementAt } from 'rxjs';
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
  constructor() { }
  web3: any;
  accounts: Array<String> | undefined;
  isClicked: boolean = false;
  isDriverClicked: boolean = false;
  iterator: number = 2;
  places: any[] = [
    { nameRegion: "Тверская область", koef: 1.40 },
    { nameRegion: "Московская область", koef: 1.56 },
    { nameRegion: "Санкт-Петербург", koef: 1.64 },
    { nameRegion: "Кировская область", koef: 1.32 },
    { nameRegion: "Новгородская область", koef: 1.64 },

  ]
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
      age: new FormControl(null, Validators.required),
      experience: new FormControl(null, Validators.required),
      withoutAccident: new FormControl(null, Validators.required),
    })
    this.formBuy = new FormGroup({


      addrRegistr: new FormControl(null) ,
      carMarka: new FormControl(null),
      classModelCar: new FormControl(null),
      dateCar: new FormControl(null),
      engine: new FormControl(null),
      bank: new FormControl(null),
      costCar: new FormControl(null),
      carPlace: new FormControl(null),
      amountUsers: new FormControl(null),
      name: new FormControl(null),
      phone: new FormControl(null, Validators.pattern("[0-9]{10}"))


    })
  }


  get _age(): string {
    return this.form.get('age')?.value
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
  get _experience(): string {
    return this.form.get('experience')?.value
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

  getSum(transportType: number, power: number, period: number, region: number, maxYearWithoutAccident: number): number {
    let mainPart: number = region * transportType * power * period;
    if (this.isDriverClicked) {
      this.formulaAnswer = mainPart * maxYearWithoutAccident;
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
    
    return  Math.round(this.getSum(Number(this._transportType), Number(this._power), Number(this._period), Number(this._region), maxYearWithoutAccident))
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

  }
}
