import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Photo } from 'src/app/models/photo.model';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  constructor(private dataService:DataService, private flashMsg:FlashMessagesService) { }

  ngOnInit() {
    this.dataService.selectedPhoto.subscribe(resData=>{
      
      if(resData.id!==null){
        this.selectedPhoto=resData;
        this.selectedPhotoTitle=this.selectedPhoto.title;
        this.selectedPhotoAlbumId=this.selectedPhoto.albumId;
        this.selectedPhotoId=this.selectedPhoto.id;
        this.selectedPhotoUrl=this.selectedPhoto.url;
        this.selectedPhotoThumbUrl=this.selectedPhoto.thumbnailUrl;
      }
      
    })
  }

  onSubmit(form:NgForm){
    const editedPhoto={albumId:this.selectedPhotoAlbumId, id:this.selectedPhotoId,title:this.selectedPhotoTitle};
    this.editPhoto(editedPhoto);
    this.flashMsg.show('Changes has been successfully saved',{
      cssClass:'alert-success',timeout:3000
    })
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
