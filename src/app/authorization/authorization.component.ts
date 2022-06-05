import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import {User} from '../api/models/user';
import { UserWithRelations } from '../api/models/user-with-relations';
import {UserControllerService} from '../api/services/user-controller.service';
import { StrictHttpResponse } from '../api/strict-http-response';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})


export class AuthorizationComponent implements OnInit {
  form: any;
  users: User[] = [];
  router: any;
  profilePage: string = '';
  constructor(private userService: UserControllerService) {
      
  }
  
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
    this.getUsers()
  } 
   getUsers(): void {
     let userData=this.userService.findByNamePass({email: this._email.value,
       password:this._password.value}).subscribe((users)=>(this.goToProfilePage('/registration', users)));
 }
  goToProfilePage(pageName:string, userData:UserWithRelations[]):void {
    //this.router.navigate([`${pageName}`]);
    let usr = userData[0].name;
    this.profilePage="<span>Имя: </span> <p [innerHTML]=usr></p>"

  }
}
