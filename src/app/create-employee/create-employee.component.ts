import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { EmployeeService } from '../providers/employee.service';

import { Upload } from '../models/upload';
import { Profile } from '../models/profile';

import {NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {

  @ViewChild('addUserForm') addUserForm : NgForm;

  selectedFiles: FileList;
  upload : Upload;
  profile : Profile;



  constructor( private employeeService: EmployeeService, private router:Router) {
    this.profile = new Profile();
   }

  ngOnInit() {
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.length);
  }
  
  uploadSingle() {
    console.log(this.addUserForm.value.name);
    this.profile.name = this.addUserForm.value.name;
    this.profile.email = this.addUserForm.value.email;
    this.profile.telephone = this.addUserForm.value.telephone;
    this.profile.date = new Date();
    this.profile.skills = this. addUserForm.value.skills; 
    let file = this.selectedFiles.item(0);
    console.log(file);
    this.upload = new Upload(file);
    this.employeeService.addProfile(this.upload, this.profile);
    

  }

  

}
