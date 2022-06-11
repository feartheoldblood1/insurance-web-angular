import { Component, OnInit } from '@angular/core';
import {UserControllerService} from '../api/services/user-controller.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})

export class JourneyComponent implements OnInit {
  form: any;
  constructor(private router: Router, private http:HttpClient, private journeyCon) { }
  isClicked: boolean = true;
 

 
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      journeyPlace: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      ageRange: new FormControl(null),
      citizenship: new FormControl(null),
      
   })
  }
  changeDate():void{
    this.isClicked = !this.isClicked;
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
    try {
      
      this.http.get("https://shielded-depths-97782.herokuapp.com/journey",{observe: 'response'})
      .subscribe(response => {
        if(response.status == 200){
          
        }   
      }, error=>{
        alert("Ошибка сервера");
        console.log(error);
      });
    } catch(err:any) {
      alert("Возникла ошибка регистрации попробуйте позже");
      console.log(err)
    }
    } 
}
