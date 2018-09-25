import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../../Services/trail.service';
import { Trail } from '../../../Shared/Models/Trail';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-trail-index',
  templateUrl: './trail-index.component.html',
  styleUrls: ['./trail-index.component.css']
})
export class TrailIndexComponent implements OnInit {

  columnNames = ['TrailID', 'TrailName', 'TrailDistance', 'TrailDifficulty', 'IsOpen', 'ParkID', 'buttons']
  dataSource: MatTableDataSource<Trail>;

  constructor(private _trailService: TrailService) { }

  ngOnInit() {
    this._trailService.getAllTrails().subscribe((trails: Trail[]) => {
      this.dataSource = new MatTableDataSource<Trail>(trails);
    });
  }

}
