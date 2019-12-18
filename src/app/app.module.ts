import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotodetailsComponent } from './components/photodetails/photodetails.component';
import { PhotoeditComponent } from './components/photoedit/photoedit.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { PhotouploadComponent } from './components/photoupload/photoupload.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgxSpinnerModule } from "ngx-spinner";

const appRoutes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'uploadphoto', component: PhotouploadComponent },
  { path: 'photos/:id', component: PhotodetailsComponent },
  { path: 'photos/edit/:id', component: PhotoeditComponent },
  
  // { path: 'search', component: SearchComponent },
  // { path: 'p', component: PostsComponent },
  // { path: 'posts', component: PostsComponent },
  // { path: 'profile/:username', component: UserprofileComponent,
  //   children: [
  //     {path: '', component:PostsComponent}
  //   ] 
  // },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    PagenotfoundComponent,
    PhotosComponent,
    PhotodetailsComponent,
    PhotoeditComponent,
    PhotoItemComponent,
    PhotouploadComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule,NgxSpinnerModule,BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
