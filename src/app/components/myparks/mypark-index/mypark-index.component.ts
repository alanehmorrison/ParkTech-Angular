import { Component, OnInit } from '@angular/core';
import { MyParkService } from '../../../Services/mypark.service';
import { MyPark, MyTrailStatus } from '../../../Shared/Models/MyPark'
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-mypark-index',
  templateUrl: './mypark-index.component.html',
  styleUrls: ['./mypark-index.component.css']
})

export class MyParkIndexComponent implements OnInit {

  columnNames = ['ParkName', 'TrailID', 'TrailName', 'StatusString', 'TrailComment', 'buttons']
  dataSource: MatTableDataSource<MyPark>;
  enumDisplay: string;
  myPark: MyPark;

  constructor(private _myParkService: MyParkService) { }

  ngOnInit() {
    this._myParkService.getAllMyParks().subscribe((myParks: MyPark[]) => {
      this.dataSource = new MatTableDataSource<MyPark>(myParks);
      for (var myPark in myParks)
      {
        this.enumDisplay = MyTrailStatus[this.dataSource.data[myPark].MyTrailStatus];
        this.dataSource.data[myPark].StatusString = this.enumDisplay;
      }
    });
  }
}