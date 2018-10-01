import { Component, OnInit } from '@angular/core';
import {TrailService } from '../../../Services/trail.service';
import { Trail, Difficulty, Condition } from '../../../Shared/Models/Trail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trail-detail',
  templateUrl: './trail-detail.component.html',
  styleUrls: ['./trail-detail.component.css']
})

export class TrailDetailComponent implements OnInit {

  trail: Trail;
  difficultyDisplay: string;
  conditionDisplay: string;

  constructor(private _activatedRoute: ActivatedRoute, private _trailService: TrailService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._trailService.getTrailByID(routeData.get('id')).subscribe((singleTrail: Trail) =>{
        this.trail = singleTrail;

        this.difficultyDisplay = Difficulty[singleTrail.TrailDifficulty];
        this.trail.TrailDiff = this.difficultyDisplay;

        this.conditionDisplay = Condition[singleTrail.TrailCondition];
        this.trail.TempCondition = this.conditionDisplay;
      });
    });
  }
}