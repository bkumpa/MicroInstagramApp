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

  constructor(private dataService:DataService, private spinner:NgxSpinnerService ) { }

  ngOnInit() {
    this.spinner.show();
    this.dataService.getAllPhotos().subscribe(resData=>{
      
      this.photos=resData;
      console.log(this.photos);
      this.spinner.hide();

    })
  
  }

}
