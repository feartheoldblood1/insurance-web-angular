import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, map, Observable, Subscription } from 'rxjs';
import {User} from '../api/models/user';
import { UserWithRelations } from '../api/models/user-with-relations';
import {UserControllerService} from '../api/services/user-controller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})

export class AuthorizationComponent implements OnInit {
  form: any;
  users: UserWithRelations[] = [];

  profilePage: string = '';
  usr:string='';

  constructor(private userService: UserControllerService, private router:Router) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
   })
   
  }
  get _email() {
    return this.form.get('email')
  }
  get _password() {
    return this.form.get('password')
  }
   onSubmit(): void {
    try {
      this.userService.findByNamePass({email: this._email.value,
        password:this._password.value}).subscribe((Users:UserWithRelations[])=>{
          this.router.navigate(['/osago-form'])
          alert("Вы успешно авторизировались, страница скоро загрузиться")
          this.usr = Users.toString()

        });
    }catch(err:any){
      
      alert(err)
    }

  } 
    getUsers(): void {
     
      
 }

}
