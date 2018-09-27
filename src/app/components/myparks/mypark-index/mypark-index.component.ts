import { Component, OnInit } from '@angular/core';
import { MyParkService } from '../../../Services/mypark.service';
import { MyPark } from '../../../Shared/Models/MyPark'
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-mypark-index',
  templateUrl: './mypark-index.component.html',
  styleUrls: ['./mypark-index.component.css']
})

export class MyParkIndexComponent implements OnInit {

  columnNames = ['ParkName', 'TrailID', 'TrailName', 'MyTrailStatus', 'TrailComment']
  dataSource: MatTableDataSource<MyPark>;

  constructor(private _myParkService: MyParkService) { }

  ngOnInit() {
    this._myParkService.getAllMyParks().subscribe((myPark: MyPark[]) => {
      console.log(myPark)
      this.dataSource = new MatTableDataSource<MyPark>(myPark);
      console.log(myPark)
    });
  }
}