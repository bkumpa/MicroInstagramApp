import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Photo } from '../models/photo.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url=`https://jsonplaceholder.typicode.com`;
  photos:any[];

  private searchedTerm= new BehaviorSubject<string>(null);
  search_term=this.searchedTerm.asObservable();



  private photoSource= new BehaviorSubject<Photo>({id:null, title:null, albumId:null});
  selectedLog=this.photoSource.asObservable();

  constructor(private http:HttpClient, private router: Router,) { }


  setFormLog(photo){
    //ispukuva nova/posledna vrednost sekogas koga ima promena
    this.photoSource.next(photo);
  }


  //fetch all photos
  getAllPhotos(){
    const resultData=this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos`);
    return resultData;
  }
  //get photo details
  fetchPhotoDetails(id){
    if (!id) {
      
      return of([]);
    }
    else{
      const resultData=this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos/${id}`);
      return resultData;
    }
  }
    //delete photo
    deletePhoto(photoId){
      fetch(`https://jsonplaceholder.typicode.com/posts/${photoId}`, {
        method: 'DELETE'
      });
      alert("Item deleted");
      this.router.navigate(['/photos']);
    }


  searchPhotos(term: string): Observable<any> {
    if (!term) {
      
      return of([]);
    }
    else{
      const resultData=this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos`);
      return resultData;
    }
  }

  searchPhoto(term){
    //ispukuva nova/posledna vrednost sekogas koga ima promena
    this.searchedTerm.next(term);
    this.searchPhotos(term)
    .pipe(
      debounceTime(1500)
    )
    .subscribe(
      data=>{
        this.photos=data.items;
        console.log(term);
        console.log(this.photos);
      }
    );
  }

}
