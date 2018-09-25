import { Component, OnInit } from '@angular/core';
import { MyParkService } from '../../../Services/mypark.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Park } from 'src/app/Shared/Models/Park';
import { ParkService } from '../../../Services/park.service';
import { Trail } from 'src/app/Shared/Models/Trail';
import { TrailService } from 'src/app/Services/trail.service';

@Component({
  selector: 'app-mypark-create',
  templateUrl: './mypark-create.component.html',
  styleUrls: ['./mypark-create.component.css']
})
export class MyParkCreateComponent implements OnInit {

  myParkForm: FormGroup;
  parks: Park[];
  trails: Trail[];
  myTrailStatus: string[] = [ 'Completed', 'Wishlist', 'Favorite']
  
  constructor (private _myParkService: MyParkService, private _form: FormBuilder, private _router: Router, private _parkService: ParkService, private _trailService: TrailService) {
    this.createForm();
  }

  ngOnInit() {
    this._parkService.getAllParks().subscribe((parks: Park[]) => {
      this.parks = parks
    });
    this._trailService.getAllTrails().subscribe((trails: Trail[]) => {
      this.trails = trails
    });
  }

  createForm() {
    this.myParkForm = this._form.group({
      MyParkID: new FormControl,
      ParkID: new FormControl,
      ParkName: new FormControl,
      TrailID: new FormControl,
      TrailName: new FormControl,
      MyTrailStatus: new FormControl,
      TrailComment : new FormControl
    })
  }

  onSubmit() {
    this._myParkService.createMyPark(this.myParkForm.value).subscribe( data => {
      this._router.navigate(['/mypark']);
    });
  }

}
