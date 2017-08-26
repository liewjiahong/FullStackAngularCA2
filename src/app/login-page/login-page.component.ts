import { Component, OnInit, HostBinding } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from '@angularfire2';
import { Router } from "@angular/router";
import { AuthService } from '../providers/auth.service';
//import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  //takes in two things 1) authentication
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  //calling on auth.service.ts's loginwithgoogle
  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    });
  }

  //calling on auth.service.ts's loginwithFacebook
  loginFaceBook() {
    this.authService.loginWithFacebook().then((data) => {
    this.router.navigate(['']); 
    });
  }
}
