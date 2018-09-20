import { Component, OnInit } from '@angular/core';
import { TrailsService } from '../../../Services/trails.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trails-create',
  templateUrl: './trails-create.component.html',
  styleUrls: ['./trails-create.component.css']
})
export class TrailsCreateComponent implements OnInit {

  trailsForm: FormGroup;

  constructor (private _parkservice: TrailsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.trailsForm = this._form.group({
      TrailName: new FormControl,
      TrailDistance: new FormControl,
      TrailDifficulty: new FormControl,
      IsOpen: new FormControl,
      ParkId: new FormControl,
      ParkName: new FormControl
    
    })
  }

  onSubmit() {
    this._parkservice.createTrail(this.trailsForm.value).subscribe( data => {
      this._router.navigate(['/trail']);
    });
  }

}
