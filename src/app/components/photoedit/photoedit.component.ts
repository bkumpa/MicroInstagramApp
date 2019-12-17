import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Photo } from 'src/app/models/photo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-photoedit',
  templateUrl: './photoedit.component.html',
  styleUrls: ['./photoedit.component.css']
})
export class PhotoeditComponent implements OnInit {

  selectedPhoto:Photo;
  selectedPhotoTitle:string='';
  selectedPhotoAlbumId:string='';
  selectedPhotoId:string='';
  selectedPhotoUrl:string='';
  selectedPhotoThumbUrl:string='';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.selectedPhoto.subscribe(resData=>{
      
      if(resData.id!==null){
        this.selectedPhoto=resData;
        this.selectedPhotoTitle=this.selectedPhoto.title;
        this.selectedPhotoAlbumId=this.selectedPhoto.albumId;
        this.selectedPhotoId=this.selectedPhoto.id;
        this.selectedPhotoUrl=this.selectedPhoto.url;
        this.selectedPhotoThumbUrl=this.selectedPhoto.thumbnailUrl;
        // this.selectedLogDate=this.selectedLog.date;
        // this.isNewLog=false;
        console.log("ova dobiv");
        console.log(this.selectedPhoto);
      }
      
    })
  }

  onSubmit(form:NgForm){
    const editedPhoto={albumId:this.selectedPhotoAlbumId, id:this.selectedPhotoId,title:this.selectedPhotoTitle};
    this.editPhoto(editedPhoto);
    this.selectedPhotoTitle=''; 
  }

  editPhoto(photo:Photo){
    this.dataService.editPhoto(photo);
  }

  resetField(){
    this.selectedPhotoTitle='';
    this.selectedPhotoUrl='';
    this.selectedPhotoThumbUrl='';
  }
}
