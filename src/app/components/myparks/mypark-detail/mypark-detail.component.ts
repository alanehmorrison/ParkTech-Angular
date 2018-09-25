import { Component, OnInit } from '@angular/core';
import { MyParkService } from '../../../Services/mypark.service';
import { MyPark } from '../../../Shared/Models/MyPark';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mypark-detail',
  templateUrl: './mypark-detail.component.html',
  styleUrls: ['./mypark-detail.component.css']
})
export class MyParkDetailComponent implements OnInit {

  myPark: MyPark;

  constructor(private _activatedRoute: ActivatedRoute, private _myParkService: MyParkService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._myParkService.getMyParkByID(routeData.get('id')).subscribe((singleMyPark: MyPark) => {
        this.myPark = singleMyPark;
      });
    });
  }

}
