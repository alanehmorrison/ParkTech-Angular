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

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  
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
