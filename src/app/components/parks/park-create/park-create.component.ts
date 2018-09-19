import { Component, OnInit } from '@angular/core';
import { ParksService } from '../../../services/parks.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-park-create',
  templateUrl: './park-create.component.html',
  styleUrls: ['./park-create.component.css']
})
export class ParkCreateComponent implements OnInit {

  parksForm: FormGroup;

  constructor (private _parkservice: ParksService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.parksForm = this._form.group({
      ParkId: new FormControl,
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
    this._parkservice.createPark(this.parksForm.value).subscribe( data => {
      this._router.navigate(['/park']);
    });
  }


}
