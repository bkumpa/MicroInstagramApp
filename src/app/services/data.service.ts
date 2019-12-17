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
  selectedPhoto=this.photoSource.asObservable();

  constructor(private http:HttpClient, private router: Router,) { }


  setFormPhoto(photo){
    //ispukuva nova/posledna vrednost sekogas koga ima promena
    this.photoSource.next(photo);
  }


  //fetch all photos
  getAllPhotos(){
    const resultData=this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos`);
    return resultData;
  }
    //delete photo
    deletePhoto(photo){
      fetch(`https://jsonplaceholder.typicode.com/posts/${photo.id}`, {
        method: 'DELETE'
      });
      this.router.navigate(['/']);
    }

    //edit photo
    editPhoto(photo){
      fetch(`https://jsonplaceholder.typicode.com/photos/${photo.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: photo.id,
          title: photo.title,
          albumId: photo.albumId,
          thumbnailUrl: photo.thumbnailUrl,
          url:photo.url
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      // this.router.navigate(['/pagenotfound']);
    }

    //upload photo

    uploadPhoto(photo){
      fetch(`https://jsonplaceholder.typicode.com/photos`, {
        method: 'POST',
        body: JSON.stringify({
          id: photo.id,
          title: photo.title,
          albumId: photo.albumId,
          thumbnailUrl: photo.thumbnailUrl,
          url:photo.url
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      // this.router.navigate(['/pagenotfound']);
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
  searchPhotos(term: string): Observable<any> {
    if (!term) {
      
      return of([]);
    }
    else{
      const resultData=this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos`);
      return resultData;
    }
  }

}
