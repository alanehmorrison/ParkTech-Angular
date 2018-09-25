import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../../Services/trail.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Park } from 'src/app/Shared/Models/Park';
import { ParkService } from '../../../Services/park.service';


@Component({
  selector: 'app-trail-create',
  templateUrl: './trail-create.component.html',
  styleUrls: ['./trail-create.component.css']
})
export class TrailCreateComponent implements OnInit {

  trailForm: FormGroup;
  parks: Park[];
  constructor(private _trailService: TrailService, private _form: FormBuilder, private _router: Router, private _parkService: ParkService) {
    this.createForm();
  }

  ngOnInit() {
    this._parkService.getAllParks().subscribe((parks: Park[]) => {
      // console.log(parks);
      this.parks = parks
    });
    
  }

  createForm() {
    this.trailForm = this._form.group({
      TrailName: new FormControl,
      TrailDistance: new FormControl,
      TrailDifficulty: new FormControl,
      IsOpen: new FormControl,
      ParkID: new FormControl,
      ParkName: new FormControl

    })
  }

  onSubmit() {
    this._trailService.createTrail(this.trailForm.value).subscribe(data => {
      this._router.navigate(['/trail']);
    });
  }

}
