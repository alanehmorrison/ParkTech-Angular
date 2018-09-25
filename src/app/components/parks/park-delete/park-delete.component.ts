import { Component, OnInit } from '@angular/core';
import { ParkService } from '../../../Services/park.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Park } from '../../../Shared/Models/Park';

@Component({
  selector: 'app-park-delete',
  templateUrl: './park-delete.component.html',
  styleUrls: ['./park-delete.component.css']
})
export class ParkDeleteComponent implements OnInit {

  park: Park;
  constructor(private _parkService: ParkService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._parkService.getParkByID(p.get('id')).subscribe((singlePark: Park) =>{
        this.park = singlePark;
      })
    })
   }

  ngOnInit() {
  }
  onDelete(){
    this._parkService.deletePark(this.park.ParkID).subscribe(() =>{
      this._router.navigate(['/park']);
    });
  }

}
