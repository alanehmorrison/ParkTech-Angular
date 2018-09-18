import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypark-index',
  templateUrl: './mypark-index.component.html',
  styleUrls: ['./mypark-index.component.css']
})
export class MyparkIndexComponent implements OnInit {

  columnNames = ['MyParkId', 'ParkId', 'TrailId', 'MyTrailStatus', 'TrailComment']

  constructor() { }

  ngOnInit() {
  }

}
