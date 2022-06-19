import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JourneyControllerService } from '../api/services';
@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})

export class JourneyComponent implements OnInit {
  form: any;
  constructor(private router: Router, private http:HttpClient, private journeyService:JourneyControllerService) { }
  isClicked: boolean = true;
 

 
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      journeyPlace: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null ,Validators.required),
       
      ageRange: new FormControl(null, Validators.required),
      citizenship: new FormControl(null, Validators.required),
      
   })
  }


  get _email():string {
    return this.form.get('email')?.value;
  }
  get _journeyPlace():string {
    return this.form.get('journeyPlace')?.value;
  }

  get _startDate():string {
    return this.form.get('startDate')?.value;
  }
  get _endDate():string {
    return this.form.get('endDate')?.value;
  }
  get _ageRange():string {
    return this.form.get('ageRange')?.value;
  }

  get _citizenship():string {
    return this.form.get('citizenship')?.value;
  }
  onSubmit(): void{
    console.log(this.journeyService.sendMsgToMail({countries: this._journeyPlace,
      dateStart: this._startDate, dateEnd: this._endDate,
      ageRange: this._ageRange,citezenship: this._citizenship,
      email: this._email
         }).subscribe())
    // try {
      
     
          
    //         this.http.get("https://shielded-depths-97782.herokuapp.com",{observe: 'response'})
    //         .subscribe(response => {
    //           if(response.status == 200){
    //     }   
    //   }, error=>{
    //     alert("Ошибка сервера");
    //     console.log(error);
    //   });
    // } catch(err:any) {
    //   alert("Возникла ошибка регистрации попробуйте позже");
    //   console.log(err)
    // }
    } 
}
