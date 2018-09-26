import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurveyService } from '../survey.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  showGoBackMessage:boolean = false;
  onSubmit(){
  	//console.log("onCourse");
  	if(this.surveyService.country && this.surveyService.country.length > 1 && this.surveyService.country.length < 29){
  		if(this.surveyService.location == 'Overseas'){
  			this.router.navigate(['/overseas-purpose']);
  		}
  		else if(this.surveyService.employmentStatus == 'Foreign Employment'){
	  		this.router.navigate(['/foreign-employment'])
	  	}
	  	else{
	  		this.isInvalid = true;
	  		this.showGoBackMessage = true;
	  	}
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
