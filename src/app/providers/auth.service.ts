import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';


import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  user : Observable<firebase.User>; //keeps track of login user (creating an observable to ...)

  constructor(public afAuth : AngularFireAuth) {
    this.user = afAuth.authState;
   }

   loginWithGoogle () {
     return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

   }

   loginWithFacebook () {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
   }

   logout() {
     return this.afAuth.auth.signOut();
   }
}

