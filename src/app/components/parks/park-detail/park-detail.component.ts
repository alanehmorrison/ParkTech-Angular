import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ParksService } from '../../../services/parks.service';
import { Park } from '../../../Shared/Models/Park';

@Component({
  selector: 'app-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css']
})
export class ParkDetailComponent implements OnInit {

  park: Park;

  constructor(private _activatedRoute: ActivatedRoute, private _parkService: ParksService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._parkService.getParks().subscribe((singlePark: Park) =>{
        this.park = singlePark;
      });
    });
  }

}
