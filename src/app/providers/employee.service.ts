import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Upload } from '../models/upload';
import { Profile } from '../models/profile';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Injectable()
export class EmployeeService {

  profiles: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private fb : FirebaseApp, private router:Router) {
  }

   retrieveProfiles(queryString : string) {
    if (queryString == ''){
      this.profiles = this.db.list('https://angularca2-80186.firebaseio.com/Profiles');
      return this.profiles;
    }  else {
      this.profiles = this.db.list('/Profiles', {
        query: {
          orderByChild: 'name',
          equalTo: queryString,
        }
      });
      return this.profiles;
    } 
  }

  addProfile(upload : Upload, profile : Profile) {
    console.log('HEEELLLOOO!')
    
    let storageRef = this.fb.storage().ref();
    let uploadTask = storageRef.child(`/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = ((snapshot as firebase.storage.UploadTaskSnapshot).bytesTransferred / (snapshot as firebase.storage.UploadTaskSnapshot).totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        profile.photo = uploadTask.snapshot.downloadURL;
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(profile)
      }
    );
    

  }
  
  // used in addProfile
  private saveFileData(profile : Profile) {
    this.profiles = this.db.list('https://angularca2-80186.firebaseio.com/Profiles');
    this.profiles.push(profile)
    .then(_=> window.alert("Upload Successfully!"))
    .catch(err => window.alert("Upload Error!"));
    this.router.navigate([''])
  }  
}
