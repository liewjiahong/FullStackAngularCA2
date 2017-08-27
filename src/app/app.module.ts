import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

//for talking to firebase
import { AngularFireModule } from "angularfire2";
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{ AngularFireAuthModule} from 'angularfire2/auth';
import 'firebase/storage';

import { AuthService } from './providers/auth.service';
import { EmployeeService } from './providers/employee.service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component'
import { CreateEmployeeComponent } from './create-employee/create-employee.component'

// Initialize Firebase
export const config = {
  apiKey: "AIzaSyBgTUxmYu0mSyFJ0V3ok5AL5BsaOsGUnqY",
  authDomain: "angularca2-80186.firebaseapp.com",
  databaseURL: "https://angularca2-80186.firebaseio.com",
  projectId: "angularca2-80186",
  storageBucket: "angularca2-80186.appspot.com",
  messagingSenderId: "704878533260"
};
//firebase.initializeApp(config); instead of initialising here as thre is no more firebase object, the firebase db is initialised through angular fire, hence initialise below

//for this path, use this component.
const routes : Routes = [
  { path: '', component: ViewEmployeesComponent},
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ViewEmployeesComponent,
    CreateEmployeeComponent
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
  providers: [AuthService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
