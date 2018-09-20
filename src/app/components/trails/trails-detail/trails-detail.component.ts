import { Component, OnInit } from '@angular/core';
import {TrailsService } from '../../../Services/trails.service';
import { Trail } from '../../../Shared/Models/Trail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trails-detail',
  templateUrl: './trails-detail.component.html',
  styleUrls: ['./trails-detail.component.css']
})
export class TrailsDetailComponent implements OnInit {

  trail: Trail;

  constructor(private _activatedRoute: ActivatedRoute, private _trailsService: TrailsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._trailsService.getTrail(routeData.get('id')).subscribe((singleTrail: Trail) =>{
        this. trail = singleTrail;
      });
    });
  }

}
