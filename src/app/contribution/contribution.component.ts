import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router ) { }

  ngOnInit() {
  	if(this.surveyService.contribution){
  		if(this.surveyService.contribution.length < 20 || this.surveyService.contribution.length > 1999){
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
  	if(this.surveyService.contribution == "No"){
  		this.router.navigate(['/alumni']);
  	}
  	else if(this.showOther){
  		if(this.surveyService.contribution.length < 20 || this.surveyService.contribution.length > 1999){
  			this.isInvalid = true;
  		}
  		else{
  			this.router.navigate(['/alumni']);
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
  	this.surveyService.contribution = '';
  }
  hideOther(){
  	this.showOther = false;
  }
}

/*

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
