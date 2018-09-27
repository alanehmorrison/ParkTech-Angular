import { Component, OnInit } from '@angular/core';
import {TrailService } from '../../../Services/trail.service';
import { Trail } from '../../../Shared/Models/Trail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trail-detail',
  templateUrl: './trail-detail.component.html',
  styleUrls: ['./trail-detail.component.css']
})

export class TrailDetailComponent implements OnInit {

  trail: Trail;

  constructor(private _activatedRoute: ActivatedRoute, private _trailService: TrailService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._trailService.getTrailByID(routeData.get('id')).subscribe((singleTrail: Trail) =>{
        this.trail = singleTrail;
      });
    });
  }
}