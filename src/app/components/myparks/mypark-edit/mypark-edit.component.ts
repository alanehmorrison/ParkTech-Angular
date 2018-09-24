import { Component, OnInit } from '@angular/core';
import { MyPark } from 'src/app/Shared/Models/MyPark';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MyParkService } from '../../../Services/mypark.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mypark-edit',
  templateUrl: './mypark-edit.component.html',
  styleUrls: ['./mypark-edit.component.css']
})
export class MyParkEditComponent implements OnInit {

  myPark: MyPark;

  editMyParkForm: FormGroup;

  constructor(private _form: FormBuilder, 
              private _myParkService: MyParkService,
              private _ar: ActivatedRoute,
              private _router: Router ) {
                
                this._ar.paramMap.subscribe(mp => {
                  this._myParkService.getMyParkByID(mp.get('id')).subscribe((singleMyPark: MyPark) => {
                    this.myPark = singleMyPark;
                    this.createForm();
                  })
                })
               }

  ngOnInit() {
  }

  createForm() {
    this.editMyParkForm = this._form.group({
      MyParkID: new FormControl,
      ParkID: new FormControl,
      ParkName: new FormControl,
      TrailID: new FormControl,
      TrailName: new FormControl,
      MyTrailStatus: new FormControl,
      TrailComment : new FormControl 
    });
  }

  onSubmit(form){
    const updateMyPark: MyPark = {
      MyParkID: form.value.MyParkID,
      ParkID: form.value.ParkID,
      ParkName: form.value.ParkName,
      TrailID: form.value.TrailID,
      TrailName: form.value.TrailName,
      MyTrailStatus: form.value.MyTrailStatus,
      TrailComment : form.value.TrailComment 
    };
    this._myParkService.updateMyPark(updateMyPark).subscribe(d =>{
      this._router.navigate(['/mypark']);
    })
  }

}