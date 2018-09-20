import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../../Services/trail.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trail-create',
  templateUrl: './trail-create.component.html',
  styleUrls: ['./trail-create.component.css']
})
export class TrailCreateComponent implements OnInit {

  trailForm: FormGroup;

  constructor (private _parkService: TrailService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.trailForm = this._form.group({
      TrailName: new FormControl,
      TrailDistance: new FormControl,
      Difficulty: new FormControl,
      IsOpen: new FormControl,
      ParkID: new FormControl,
      ParkName: new FormControl
    
    })
  }

  onSubmit() {
    this._parkService.createTrail(this.trailForm.value).subscribe( data => {
      this._router.navigate(['/trail']);
    });
  }

}
