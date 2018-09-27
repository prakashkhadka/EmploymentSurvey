import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-job-satisfaction',
  templateUrl: './job-satisfaction.component.html',
  styleUrls: ['./job-satisfaction.component.css']
})
export class JobSatisfactionComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.jobSatisfactionLevel){
  		this.router.navigate(['/job/job-change']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
