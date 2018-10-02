import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../../survey.service'
import { NgForm } from "@angular/forms";
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-type',
  templateUrl: './job-type.component.html',
  styleUrls: ['./job-type.component.css']
})
export class JobTypeComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.jobType){
  		this.router.navigate(['/job/organisation-type']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
