import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-photodetails',
  templateUrl: './photodetails.component.html',
  styleUrls: ['./photodetails.component.css']
})
export class PhotodetailsComponent implements OnInit {
   id;
   photo:any;
    constructor(private route: ActivatedRoute, private dataService:DataService, private flashMsg:FlashMessagesService) {
  
     //take the usename from url
      this.route.params.subscribe(params => {
        console.log("ova najdov vo url");
        console.log(params.id);
        this.id=params.id;
      }); 
    }
  
    ngOnInit() {
      this.dataService.fetchPhotoDetails(this.id).subscribe(resData=>{
        this.photo=resData;
        console.log(this.photo);
      })
    }

    deletePhoto(photo){
      if(confirm("Are you sure you want to delete this log?"))
      {
        this.dataService.deletePhoto(photo);
        this.flashMsg.show('Photo was successfully deleted',{
          cssClass:'alert-success',timeout:3000
        })
      } 
      
    }
    onSelectEditPhoto(photo){
        this.dataService.setFormPhoto(photo);//puka promena na vrednost
    }

}
