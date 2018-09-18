import { Component, OnInit } from '@angular/core';
import { MyparksService } from '../../../Services/myparks.service';
import { MyPark } from '../../../Shared/Models/MyPark'
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';


@Component({
  selector: 'app-mypark-index',
  templateUrl: './mypark-index.component.html',
  styleUrls: ['./mypark-index.component.css']
})
export class MyparkIndexComponent implements OnInit {

  columnNames = ['MyParkId', 'ParkId', 'TrailId', 'MyTrailStatus', 'TrailComment']
  dataSource: MatTableDataSource<MyPark>;

  constructor(private _myparkService: MyparksService) { }

  ngOnInit() {
    this._myparkService.getMyParks().subscribe((myparks: MyPark[]) => {
      this.dataSource = new MatTableDataSource<MyPark>(myparks);
    });
  }

}
