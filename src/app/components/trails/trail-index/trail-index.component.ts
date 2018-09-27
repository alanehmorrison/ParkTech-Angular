import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../../Services/trail.service';
import { Trail, Difficulty } from '../../../Shared/Models/Trail';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-trail-index',
  templateUrl: './trail-index.component.html',
  styleUrls: ['./trail-index.component.css']
})

export class TrailIndexComponent implements OnInit {

  columnNames = ['TrailID', 'TrailName', 'TrailDistance', 'enumDisplay', 'IsOpen', 'ParkID', 'buttons']
  dataSource: MatTableDataSource<Trail>;
  difficulty: Difficulty;
  enumDisplay: string;
  trail: Trail;

  constructor(private _trailService: TrailService) { }

  ngOnInit() {
    this._trailService.getAllTrails().subscribe((trails: Trail[]) => {
      this.dataSource = new MatTableDataSource<Trail>(trails);
      for (var trail in trails)
      {
        console.log(Difficulty[trails[trail].TrailDifficulty]);
        this.enumDisplay = Difficulty[trails[trail].TrailDifficulty];
      }
    });
  }
}