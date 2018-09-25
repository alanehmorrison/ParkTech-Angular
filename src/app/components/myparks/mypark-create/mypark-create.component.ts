import { Component, OnInit } from '@angular/core';
import { MyParkService } from '../../../Services/mypark.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypark-create',
  templateUrl: './mypark-create.component.html',
  styleUrls: ['./mypark-create.component.css']
})
export class MyParkCreateComponent implements OnInit {

  myParkForm: FormGroup;

  constructor (private _myParkService: MyParkService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myParkForm = this._form.group({
      MyParkID: new FormControl,
      ParkID: new FormControl,
      TrailID: new FormControl,
      MyTrailStatus: new FormControl,
      Park: new FormControl,
      Trail: new FormControl,
      Comments : new FormControl
    })
  }

  onSubmit() {
    this._myParkService.createMyPark(this.myParkForm.value).subscribe( data => {
      this._router.navigate(['/mypark']);
    });
  }

}
