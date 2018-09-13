import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private _loginForm: FormGroup;

  constructor(private _form: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this._loginForm = this._form.group({
      email: new FormControl,
      username: new FormControl,
      password: new FormControl,
      passwordConfirm: new FormControl
    });
  }

  onSubmit(){
    console.log(this._loginForm.value);
  }
}
