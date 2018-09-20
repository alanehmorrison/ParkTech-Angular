import { Component, OnInit } from '@angular/core';
import { ParkService } from '../../../Services/park.service';
import { Park } from '../../../Shared/Models/Park';
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-park-index',
  templateUrl: './park-index.component.html',
  styleUrls: ['./park-index.component.css']
})
export class ParkIndexComponent implements OnInit {

  columnNames = ['ParkID', 'ParkName', 'ParkCost', 'ParkState', 'ParkPhone', 'ParkWebsite', 'ParkDescription']
  dataSource: MatTableDataSource<Park>;

  constructor(private _parkService: ParkService) { }

  ngOnInit() {
    this._parkService.getAllParks().subscribe((parks: Park[]) => {
      this.dataSource = new MatTableDataSource<Park>(parks);
    });
  }
}
