import { Component, OnInit } from '@angular/core';
import { Park } from '../../../Shared/Models/Park';
import { FormGroup, FormBuilder, FormControl } from '../../../../../node_modules/@angular/forms';
import { ParkService } from '../../../Services/park.service';
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
              private _parkService: ParkService,
              private _ar: ActivatedRoute,
              private _router: Router) {
    
    this._ar.paramMap.subscribe(p =>{
      this._parkService.getParkByID(p.get('id')).subscribe((singlePark: Park) =>{
        this.park = singlePark;
        this.createForm();
      })
    })            
   }

  ngOnInit() {
  }

  createForm(){
    this.editParkForm = this._form.group({
      ParkID: new FormControl(this.park.ParkID),
      ParkName: new FormControl(this.park.ParkName),
      ParkCost: new FormControl(this.park.ParkCost),
      ParkAddress: new FormControl(this.park.ParkAddress),
      ParkCity: new FormControl(this.park.ParkCity),
      ParkState: new FormControl(this.park.ParkState),
      ParkZip: new FormControl(this.park.ParkZip),
      ParkPhone: new FormControl(this.park.ParkPhone),
      ParkWebsite: new FormControl(this.park.ParkWebsite),
      ParkDescription: new FormControl(this.park.ParkDescription)
    })
  }

}
