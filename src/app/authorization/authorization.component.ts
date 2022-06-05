import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../api/models/user';
import {UserControllerService} from '../api/services/user-controller.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})


export class AuthorizationComponent implements OnInit {
  form: any;
  users: User[] = [];
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
    console.log(this.getUsers());
  } 
   getUsers() {
    let isAuth: boolean; 
    return this.userService
      .findByNamePass$Response({email: this._email.value,password:this._password.value})
    
  }

}
