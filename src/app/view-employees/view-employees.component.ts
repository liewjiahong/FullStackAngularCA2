import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../providers/employee.service';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  profiles : FirebaseListObservable<any[]>;
  profileList : any[];
  queryString : string;

  constructor(public employeeService : EmployeeService, private router: Router) {

   }

  ngOnInit() {
    this.profiles = this.employeeService.retrieveProfiles('');
  }

  navigateCreate(){
    this.router.navigate(['create']);
  }

  onChange(event) {
    this.queryString = event.target.value;
    this.profiles = this.employeeService.retrieveProfiles(this.queryString);
  }
}
