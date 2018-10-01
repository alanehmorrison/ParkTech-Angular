import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from 'node_modules/@angular/forms';
import { Trail, Difficulty } from '../../../Shared/Models/Trail';
import { TrailService } from '../../../Services/trail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Park } from '../../../Shared/Models/Park';


@Component({
  selector: 'app-trail-edit',
  templateUrl: './trail-edit.component.html',
  styleUrls: ['./trail-edit.component.css']
})

export class TrailEditComponent implements OnInit {

  trail: Trail;
  parks: Park[];
  editTrailForm: FormGroup;
  trailDifficulty: string [] =['Easy', 'Moderate', 'Challenging'];
  trailDifficultyEnum: Difficulty;
  trailCondition: string [] = [ 'Open', 'Closed', 'Construction', 'Weather'];
  initialVal: string | null;

  constructor(private _form: FormBuilder,
              private _trailservice: TrailService,
              private _ar: ActivatedRoute,
              private _router: Router) {

                this._ar.paramMap.subscribe(p =>{
                  this._trailservice.getTrailByID(p.get('id')).subscribe((singleTrail: Trail) => {
                    this.trail = singleTrail;
                    this.initialVal = Difficulty[singleTrail.TrailDifficulty];
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
      TrailCondition: new FormControl(this.trail.TrailCondition),
      ParkID: new FormControl(this.trail.ParkID),
      ParkName: new FormControl(this.trail.ParkName)
    });
  }

  onSubmit(form){
    const updateTrail: Trail = {
      TrailID: this.trail.TrailID,
      TrailName: form.value.TrailName,
      TrailDistance: form.value.TrailDistance,
      TrailDifficulty: form.value.TrailDifficulty,
      TrailCondition: form.value.TrailCondition,
      ParkID: form.value.ParkID,
      ParkName: form.value.ParkName
    };
    this._trailservice.updateTrail(updateTrail).subscribe(d =>{
      this._router.navigate(['/trail'])
    });
  }
}