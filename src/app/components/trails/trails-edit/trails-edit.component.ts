import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from 'node_modules/@angular/forms';
import { Trail } from '../../../Shared/Models/Trail';
import { TrailsService } from '../../../Services/trails.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trails-edit',
  templateUrl: './trails-edit.component.html',
  styleUrls: ['./trails-edit.component.css']
})
export class TrailsEditComponent implements OnInit {

  trail: Trail;

  editTrailForm: FormGroup;

  constructor(private _form: FormBuilder,
              private _trailservice: TrailsService,
              private _ar: ActivatedRoute,
              private _router: Router) {

                this._ar.paramMap.subscribe(p =>{
                  this._trailservice.getTrail(p.get('id')).subscribe((singleTrail: Trail) => {
                    this.trail = singleTrail;
                    this.createForm();
                  });
                });
               }

  ngOnInit() {
  }

  createForm(){
    this.editTrailForm = this._form.group({
      TrailId: new FormControl(this.trail.TrailId),
      TrailName: new FormControl(this.trail.TrailName),
      TrailDistance: new FormControl(this.trail.TrailDistance),
      TrailDifficulty: new FormControl(this.trail.Difficulty),
      IsOpen: new FormControl(this.trail.IsOpen),
      ParkId: new FormControl(this.trail.ParkId),
      ParkName: new FormControl(this.trail.ParkName)
    });
  }

  onSubmit(form){
    const updateTrail: Trail = {
      TrailId: form.value.TrailId,
      TrailName: form.value.TrailName,
      TrailDistance: form.value.TrailDistance,
      Difficulty: form.value.TrailDifficulty,
      IsOpen: form.value.IsOpen,
      ParkId: form.value.ParkId,
      ParkName: form.value.ParkName
    };
    this._trailservice.updateTrail(updateTrail).subscribe(d =>{
      this._router.navigate(['/trails']);
    });
  }
}
