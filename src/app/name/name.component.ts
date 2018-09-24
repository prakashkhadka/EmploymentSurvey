import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor( private surveyService: SurveyService, private location:Location, private router:Router) { }
  
  noName:string;
  isInvalid:boolean = false;

  ngOnInit() {
  }

  resetName(){
    console.log("reset name");
    //this.surveyService.firstname = null;
    //this.surveyService.lastname = null;
    if(this.noName){
        this.surveyService.firstname = null;
        this.surveyService.lastname = null;
    }
    else{

    }
  }
  
  onSubmit(){
    //console.log("onCourse");
    if(this.surveyService.firstname && this.surveyService.lastname || this.noName){
      this.router.navigate(['/email']);
    }
    else{
      this.isInvalid = true;
    }
  }

  goBack(){
    this.location.back();
  }
  
  /*
  submit(){
  	console.log("Submit Button clicked");
  	this.surveyService.submit();
  }
  */

 
  }
