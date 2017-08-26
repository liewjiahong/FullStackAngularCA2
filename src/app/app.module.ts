import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

//for talking to firebase
import { AngularFireModule } from "angularfire2";
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{ AngularFireAuthModule} from 'angularfire2/auth';

import { AuthService } from './providers/auth.service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

// Initialize Firebase
export const config = {
      apiKey: "AIzaSyCYhPcQrIl_h8MHK7myY8l0PpyBR9jqtN8",
      authDomain: "sa44team4app.firebaseapp.com",
      databaseURL: "https://sa44team4app.firebaseio.com",
      projectId: "sa44team4app",
      storageBucket: "",
      messagingSenderId: "40136933744"
};
//firebase.initializeApp(config); instead of initialising here as thre is no more firebase object, the firebase db is initialised through angular fire, hence initialise below

//for this path, use this component.
const routes : Routes = [
  { path: '', component:HomePageComponent},
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  //this allows the other pages to make use of the following
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config), // initialise firebase
    RouterModule.forRoot(routes)//pump in routes that are stated above.
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
