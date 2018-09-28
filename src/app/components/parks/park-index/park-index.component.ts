import { Component, OnInit } from '@angular/core';
import { ParkService } from '../../../Services/park.service';
import { Park, State } from '../../../Shared/Models/Park';
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-park-index',
  templateUrl: './park-index.component.html',
  styleUrls: ['./park-index.component.css']
})
export class ParkIndexComponent implements OnInit {

  columnNames = ['ParkID', 'ParkName', 'ParkCost', 'parkState', 'ParkPhone', 'ParkWebsite', 'ParkDescription', 'buttons']
  dataSource: MatTableDataSource<Park>;
  enumDisplay: string;
  park: Park;

  constructor(private _parkService: ParkService) { }

  ngOnInit() {
    this._parkService.getAllParks().subscribe((parks: Park[]) => {
      this.dataSource = new MatTableDataSource<Park>(parks);
      for (var park in parks)
      {
        this.enumDisplay = State[this.dataSource.data[park].ParkState];
        this.dataSource.data[park].parkState = this.enumDisplay;
      }
    });
  }
}