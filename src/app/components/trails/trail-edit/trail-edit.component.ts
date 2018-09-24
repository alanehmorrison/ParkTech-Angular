import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from 'node_modules/@angular/forms';
import { Trail } from '../../../Shared/Models/Trail';
import { TrailService } from '../../../Services/trail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trail-edit',
  templateUrl: './trail-edit.component.html',
  styleUrls: ['./trail-edit.component.css']
})
export class TrailEditComponent implements OnInit {

  trail: Trail;

  editTrailForm: FormGroup;

  constructor(private _form: FormBuilder,
              private _trailservice: TrailService,
              private _ar: ActivatedRoute,
              private _router: Router) {

                this._ar.paramMap.subscribe(p =>{
                  this._trailservice.getTrailByID(p.get('id')).subscribe((singleTrail: Trail) => {
                    this.trail = singleTrail;
                    this.createForm();
                  });
                });
               }

  ngOnInit() {
  }

  createForm(){
    this.editTrailForm = this._form.group({
      TrailName: new FormControl(this.trail.TrailName),
      TrailDistance: new FormControl(this.trail.TrailDistance),
      TrailDifficulty: new FormControl(this.trail.TrailDifficulty),
      IsOpen: new FormControl(this.trail.IsOpen),
      ParkID: new FormControl(this.trail.ParkID),
      ParkName: new FormControl(this.trail.ParkName)
    });
  }

  onSubmit(form){
    const updateTrail: Trail = {
      TrailName: form.value.TrailName,
      TrailDistance: form.value.TrailDistance,
      TrailDifficulty: form.value.TrailDifficulty,
      IsOpen: form.value.IsOpen,
      ParkID: form.value.ParkID,
      ParkName: form.value.ParkName
    };
    this._trailservice.updateTrail(updateTrail).subscribe(d =>{
      this._router.navigate(['/trail']);
    });
  }
}
