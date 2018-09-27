import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.loginForm = this._form.group({
      email: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.required)
    });
  }

  onSubmit(){
    this._authService.login(this.loginForm.value)
    let control: AbstractControl = null;
    this.loginForm.reset();
    this.loginForm.markAsUntouched();
    Object.keys(this.loginForm.controls).forEach((name) =>{
      control = this.loginForm.controls[name];
      control.setErrors(null);
    })
  }

  
}
