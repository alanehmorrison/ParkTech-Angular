import { Component, OnInit } from '@angular/core';
import { MyPark } from 'src/app/Shared/Models/MyPark';
import { MyParkService } from 'src/app/Services/mypark.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mypark-delete',
  templateUrl: './mypark-delete.component.html',
  styleUrls: ['./mypark-delete.component.css']
})
export class MyParkDeleteComponent implements OnInit {

  myPark : MyPark;
  
  constructor(private _myParkService: MyParkService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._myParkService.getMyParkByID(p.get('id')).subscribe((singleMyPark: MyPark) => {
        this.myPark = singleMyPark;
      });
    });
   }

   onDelete() {
     this._myParkService.deleteMyPark(this.myPark.MyParkID).subscribe(() => {
       this._router.navigate(['/mypark']);
     });
   }

  ngOnInit() {
  }

}
