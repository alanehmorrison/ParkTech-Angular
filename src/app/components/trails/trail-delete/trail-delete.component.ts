import { Component, OnInit, SimpleChange } from '@angular/core';
import { Trail, Difficulty, Condition } from '../../../Shared/Models/Trail';
import { TrailService } from '../../../Services/trail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-trail-delete',
  templateUrl: './trail-delete.component.html',
  styleUrls: ['./trail-delete.component.css']
})

export class TrailDeleteComponent implements OnInit {

  trail: Trail;
  difficultyDisplay: string;
  conditionDisplay: string;
  dataSource: MatTableDataSource<Trail>;

  constructor(private _trailService: TrailService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._trailService.getTrailByID(p.get('id')).subscribe((singleTrail: Trail) => {
        this.trail = singleTrail;
      });
    });
  }

  onDelete() {
    this._trailService.deleteTrail(this.trail.TrailID).subscribe(() => {
      this._router.navigate(['/trail']);
    });
  }

  ngOnInit() {
    this._ar.paramMap.subscribe(p => {
      this._trailService.getTrailByID(p.get('id')).subscribe((singleTrail: Trail) => {
        this.trail = singleTrail;
        console.log(this.trail);
        this.difficultyDisplay = Difficulty[singleTrail.TrailDifficulty];
        this.trail.TrailDiff = this.difficultyDisplay;
        console.log(this.difficultyDisplay);
        this.conditionDisplay = Condition[singleTrail.TrailCondition];
        this.trail.TempCondition = this.conditionDisplay;
      });
    });
  }
}