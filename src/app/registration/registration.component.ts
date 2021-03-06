import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../api/models';
import {UserControllerService} from '../api/services/user-controller.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: any;

  constructor(private userService: UserControllerService,
    private router: Router,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      passwordValidation: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      surname: new FormControl(null,Validators.required),
      name: new FormControl(null, Validators.required),
      otchestvo: new FormControl(null, Validators.required),
      datebirth: new FormControl(null, Validators.required),
      foreigner: new FormControl(null, ),
      document: new FormControl(null, Validators.required),
      documentNumber: new FormControl(null, Validators.required),
      documentSerie: new FormControl(null, Validators.required),
   })
  }

  get _email():string {
    return this.form.get('email')?.value;
  }
  get _phone():string {
    return this.form.get('phoneNumber')?.value;
  }
  get _password():string {
    return this.form.get('password')?.value;
  }
  get _passwordValidation():string {
    return this.form.get('passwordValidation')?.value;
  }
  get _surname():string {
    return this.form.get('surname')?.value;
  }
  get _name():string {
    return this.form.get('name')?.value;
  }
  get _otchestvo():string {
    return this.form.get('otchestvo')?.value;
  }
  get _datebirth():string {
    return this.form.get('datebirth')?.value;
  }
  get _foreigner():string {
    return this.form.get('foreigner')?.value;
  }
  get _document():string {
    return this.form.get('document')?.value;
  }
  get _documentNumber():string {
    return this.form.get('documentNumber')?.value;
  }
  get _documentSerie():string {
    return this.form.get('documentSerie')?.value;
  }
  foreingerStr: string  = 'not foreigner'
  onSubmit(): void{
    // try {
      
      // this.http.get("https://shielded-depths-97782.herokuapp.com/users",{observe: 'response'})
      // .subscribe(response => {
      //   if(response.status == 200){
          this.userService.create({mail:this._email, phone_number: this._phone, password:this._password,
            surname:this._surname, name:this._name, otchestvo:this._otchestvo, datebirth:this._datebirth,
            foreigner:this.foreingerStr,document:this._document, document_number:this._documentNumber,
            document_series:this._documentSerie}).subscribe()
        //   alert("???? ?????????????? ????????????????????????????????????");
        //   this.router.navigate(['/autorization'])
        // }   
    //   }, error=>{
    //     alert("???????????? ??????????????");
    //     console.log(error);
    //   });
    // } catch(err:any) {
    //   alert("???????????????? ???????????? ?????????????????????? ???????????????????? ??????????");
    //   console.log(err)
    // }
    } 


  // isAlreadyExist(): boolean {
  //       this.userService()
  // }
}
