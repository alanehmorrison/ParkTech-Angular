import { Component, OnInit } from '@angular/core';
import { MyparksService } from '../../../Services/myparks.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myparks-create',
  templateUrl: './myparks-create.component.html',
  styleUrls: ['./myparks-create.component.css']
})
export class MyparksCreateComponent implements OnInit {

  myparksForm: FormGroup;

  constructor (private _myparkservice: MyparksService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myparksForm = this._form.group({
      MyParkId: new FormControl,
      ParkId: new FormControl,
      TrailId: new FormControl,
      MyTrailStatus: new FormControl,
      Park: new FormControl,
      Trail: new FormControl,
      Comments : new FormControl
    })
  }

  onSubmit() {
    this._myparkservice.createMyPark(this.myparksForm.value).subscribe( data => {
      this._router.navigate(['/mypark']);
    });
  }

}
