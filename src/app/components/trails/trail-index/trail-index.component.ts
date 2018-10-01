import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../../Services/trail.service';
import { Trail, Difficulty, Condition } from '../../../Shared/Models/Trail';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-trail-index',
  templateUrl: './trail-index.component.html',
  styleUrls: ['./trail-index.component.css']
})

export class TrailIndexComponent implements OnInit {

  columnNames = ['TrailID', 'TrailName', 'TrailDistance', 'TrailDiff', 'TempCondition', 'ParkName', 'buttons']
  dataSource: MatTableDataSource<Trail>;
  enumDisplay: string;
  conditionDisplay: string;
  trail: Trail;

  constructor(private _trailService: TrailService) { }

  ngOnInit() {
    this._trailService.getAllTrails().subscribe((trails: Trail[]) => {
      this.dataSource = new MatTableDataSource<Trail>(trails);
      for (var trail in trails)
      {
        console.log(Difficulty[trails[trail].TrailDifficulty]);
        this.enumDisplay = Difficulty[this.dataSource.data[trail].TrailDifficulty];
        this.dataSource.data[trail].TrailDiff =this.enumDisplay;
        this.conditionDisplay = Condition[this.dataSource.data[trail].TrailCondition];
        this.dataSource.data[trail].TempCondition = this.conditionDisplay;
      }
    });
  }
}