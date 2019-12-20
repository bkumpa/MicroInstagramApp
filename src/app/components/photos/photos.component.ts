import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos;
collection = [];
  constructor(private dataService:DataService, private spinner:NgxSpinnerService ) {
    // for(let i=1;i<=100;i++){
    //   let Obj = {'name': `Employee Name ${i}`,'code': `EMP00 ${i}`}
    //   this.collection.push(Obj);
    // }
   }
  ngOnInit() {
    this.spinner.show();
    this.dataService.getAllPhotos().subscribe(resData=>{
      
      this.photos=resData;
      console.log(this.photos);
      this.spinner.hide();

    })
  
  }

}
