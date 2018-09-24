import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Location } from '@angular/common';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overseas-purpose',
  templateUrl: './overseas-purpose.component.html',
  styleUrls: ['./overseas-purpose.component.css']
})
export class OverseasPurposeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	//console.log("onCourse");
  	if(this.surveyService.overseasPurpose == 'Work'){
  		this.router.navigate(['/foreign-employment/duration']);
  	}
  	else if(this.surveyService.overseasPurpose == 'Study'){
  		this.router.navigate(['/foreign-study']);
  	}
  	else if(this.surveyService.overseasPurpose == "NRN"){
  		this.router.navigate(['/name']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
