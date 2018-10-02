import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employement-status',
  templateUrl: './employement-status.component.html',
  styleUrls: ['./employement-status.component.css']
})
export class EmployementStatusComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  	
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.employmentStatus == 'Job'){
  		this.router.navigate(['/job']);
  	}
  	else if(this.surveyService.employmentStatus == 'Business'){
  		this.router.navigate(['/business']);
  	}
  	else if(this.surveyService.employmentStatus == 'Study'){
  		this.router.navigate(['/study']);
  	}
  	else if(this.surveyService.employmentStatus == 'Foreign Study'){
  		this.router.navigate(['/foreign-study']);
  	}
  	else if(this.surveyService.employmentStatus == 'Agriculture'){
  		this.router.navigate(['/agriculture']);
  	}
  	else if(this.surveyService.employmentStatus == 'Foreign Employment'){
  		this.router.navigate(['/country']);
  	}
  	else if(this.surveyService.employmentStatus == 'Housewife'){
  		this.router.navigate(['/housewife']);
  	}
  	else if(this.surveyService.employmentStatus == 'Retired'){
  		this.router.navigate(['/retired']);
  	}
    else if(this.surveyService.employmentStatus == 'Unemployed'){
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
