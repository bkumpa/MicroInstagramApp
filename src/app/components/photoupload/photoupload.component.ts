import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { format } from 'url';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-photoupload',
  templateUrl: './photoupload.component.html',
  styleUrls: ['./photoupload.component.css']
})
export class PhotouploadComponent implements OnInit {

  PhotoTitle:string='';
  PhotoAlbumId:string='';
  PhotoId:string='';
  PhotoUrl:string='';

  constructor(private dataService:DataService, private flashMsg:FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form);
    const uploadPhoto={albumId:form.value.editId, id:form.value.editId,title:form.value.editTitle, url:form.value.editUrl};
   this.uploadPhoto(uploadPhoto);
    // this.selectedPhotoTitle=''; 
    form.reset();
  }

  uploadPhoto(photo:Photo){
    this.dataService.uploadPhoto(photo);
    this.flashMsg.show('Your photo has been successfully uploaded',{
      cssClass:'alert-success',timeout:3000
    })
  }
  resetField(){
    this.PhotoTitle='';
    this.PhotoAlbumId='';
    this.PhotoId='';
    this.PhotoUrl='';
  }

}
