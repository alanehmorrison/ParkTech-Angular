import { Component, OnInit } from '@angular/core';
import { ParkService } from '../../../Services/park.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-park-create',
  templateUrl: './park-create.component.html',
  styleUrls: ['./park-create.component.css']
})
export class ParkCreateComponent implements OnInit {

  parkForm: FormGroup;

  constructor (private _parkService: ParkService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.parkForm = this._form.group({
      ParkID: new FormControl,
      ParkName: new FormControl,
      ParkCost: new FormControl,
      ParkCity: new FormControl,
      ParkAddress: new FormControl,
      ParkState: new FormControl,
      ParkZip: new FormControl,
      ParkPhone: new FormControl,
      ParkWebsite: new FormControl,
      ParkDescription: new FormControl
    })
  }

  onSubmit() {
    this._parkService.createPark(this.parkForm.value).subscribe( data => {
      this._router.navigate(['/park']);
    });
  }


}
