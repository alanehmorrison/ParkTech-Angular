import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '../../../../../node_modules/@angular/forms';
import { Park } from '../../../Shared/Models/Park';
import { ParksService } from '../../../services/parks.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-park-edit',
  templateUrl: './park-edit.component.html',
  styleUrls: ['./park-edit.component.css']
})
export class ParkEditComponent implements OnInit {

  park: Park;

  editParkForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _parkService: ParksService,
              private _ar: ActivatedRoute,
              private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._parkService.getPark(p.get('id')).subscribe((singlePark: Park) =>{
        this.park = singlePark;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm(){
    this.editParkForm = this._form.group({
      ParkId: new FormControl(this.park.ParkId),
      ParkName: new FormControl(this.park.ParkName),
      ParkCost: new FormControl(this.park.ParkCost),
      // ParkCity: new FormControl(this.park.ParkCity),
      // ParkAddress: new FormControl(this.park.ParkAddress)
    })
  }

}
