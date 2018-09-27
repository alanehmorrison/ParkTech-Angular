import { Component, OnInit } from '@angular/core';
import { Trail } from '../../../Shared/Models/Trail';
import { TrailService } from '../../../Services/trail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trail-delete',
  templateUrl: './trail-delete.component.html',
  styleUrls: ['./trail-delete.component.css']
})

export class TrailDeleteComponent implements OnInit {

  trail: Trail;
  constructor(private _trailService: TrailService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._trailService.getTrailByID(p.get('id')).subscribe((singleTrail: Trail) => {
        this.trail = singleTrail;
      });
    })
  }

  onDelete() {
    this._trailService.deleteTrail(this.trail.TrailID).subscribe(() => {
      this._router.navigate(['/trails']);
    });
  }

  ngOnInit() {
  }
}