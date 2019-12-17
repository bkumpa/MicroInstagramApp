import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos=[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAllPhotos().subscribe(resData=>{
      
      this.photos=resData;
      console.log(this.photos);
    })
  
  }

}
