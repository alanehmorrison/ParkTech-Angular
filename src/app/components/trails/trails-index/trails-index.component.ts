import { Component, OnInit } from '@angular/core';
import { TrailsService } from '../../../Services/trails.service';
import { Trail } from '../../../Shared/Models/Trail';
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-trails-index',
  templateUrl: './trails-index.component.html',
  styleUrls: ['./trails-index.component.css']
})
export class TrailsIndexComponent implements OnInit {

  columnNames = ['TrailId', 'TrailName', 'TrailDistance', 'Difficulty', 'IsOpen', 'ParkId']
  dataSource: MatTableDataSource<Trail>;

  constructor(private _trailService: TrailsService) { }

  ngOnInit() {
    this._trailService.getTrails().subscribe((trails: Trail[]) => {
      this.dataSource = new MatTableDataSource<Trail>(trails);
    });
  }

}
