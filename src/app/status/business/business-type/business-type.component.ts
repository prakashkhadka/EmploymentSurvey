import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-type',
  templateUrl: './business-type.component.html',
  styleUrls: ['./business-type.component.css']
})
export class BusinessTypeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router ) { }

  ngOnInit() {
  	if(this.surveyService.businessType && this.surveyService.businessType != 'Production' && this.surveyService.businessType != 'Retail' && this.surveyService.businessType != 'Service'){
  		if(this.surveyService.businessType.length < 2 || this.surveyService.businessType.length > 29){
  			this.isInvalid = true;
  		}
  		else{
  			this.showOther = true;
  		}
  	}
  }

  showOther:boolean = false;
  isInvalid:boolean = false;
  
  onSubmit(){
  	if(this.surveyService.businessType && this.surveyService.businessType.length > 1 && this.surveyService.businessType.length < 30){
  		this.router.navigate(['/business/employee-number']);
  	}
  	else if(this.showOther){
  		if(this.surveyService.businessType.length < 2 || this.surveyService.businessType.length > 29){
  			this.isInvalid = true;
  		}
  		else{
  			this.router.navigate(['/business/employee-number']);
  		}
  	}

  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

  otherSelected(){
  	this.showOther = true;
  	this.surveyService.businessType = '';
  }
  hideOther(){
  	this.showOther = false;
  }
}