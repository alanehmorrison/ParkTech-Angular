import { Component, OnInit } from '@angular/core';
import { ParksService } from '../../../services/parks.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Park } from '../../../Shared/Models/Park';

@Component({
  selector: 'app-park-delete',
  templateUrl: './park-delete.component.html',
  styleUrls: ['./park-delete.component.css']
})
export class ParkDeleteComponent implements OnInit {

  park: Park;
  constructor(private _parkService: ParksService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p =>{
      this._parkService.getPark(p.get('id')).subscribe((singlePark: Park) =>{
        this.park = singlePark;
      });
    });
   }

   onDelete(){
     this._parkService.deletePark(this.park.ParkId).subscribe(() =>{
       this._router.navigate(['/parks']);
     });
   }

  ngOnInit() {
  }

}
