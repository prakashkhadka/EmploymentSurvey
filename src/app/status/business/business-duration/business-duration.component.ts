import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-duration',
  templateUrl: './business-duration.component.html',
  styleUrls: ['./business-duration.component.css']
})
export class BusinessDurationComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.businessDuration){
  		this.router.navigate(['/business/business-investment']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
