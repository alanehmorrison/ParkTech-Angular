import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this._registerForm = this._form.group({
      email: new FormControl,
      username: new FormControl,
      password: new FormControl,
      ConfirmPassword : new FormControl
    });
  }

  onSubmit(){
    console.log(this._registerForm.value);
    this._authService
    .register(this._registerForm.value)
    .subscribe( () => this._authService.login(this._registerForm.value));
  }

}
