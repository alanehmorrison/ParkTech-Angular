import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Park } from '../../../Shared/Models/Park';
import { ParkService } from '../../../Services/park.service';

@Component({
  selector: 'app-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css']
})
export class ParkDetailComponent implements OnInit {

  park: Park;

  constructor( private _activatedRoute: ActivatedRoute, private _parkService: ParkService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._parkService.getParkByID(routeData.get('id')).subscribe((singlePark: Park) =>{
        this.park = singlePark;
      });
    });
  }
}