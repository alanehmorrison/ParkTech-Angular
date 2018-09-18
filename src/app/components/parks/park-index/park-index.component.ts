import { Component, OnInit } from '@angular/core';
import { ParksService } from '../../../Services/parks.service';
import { Park } from '../../../Shared/Models/Park';
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-park-index',
  templateUrl: './park-index.component.html',
  styleUrls: ['./park-index.component.css']
})
export class ParkIndexComponent implements OnInit {

  columnNames = ['MyParkId', 'ParkId', 'TrailId', 'MyTrailStatus', 'TrailComment']
  dataSource: MatTableDataSource<Park>;

  constructor(private _parkService: ParksService) { }

  ngOnInit() {
    this._parkService.getParks().subscribe((parks: Park[]) => {
      this.dataSource = new MatTableDataSource<Park>(parks);
    });
  }
}
