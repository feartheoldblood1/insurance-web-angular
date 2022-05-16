import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})



export class AuthorizationComponent implements OnInit {
  form: any;
  constructor() {
      
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
  onSubmit() {

  }
}
