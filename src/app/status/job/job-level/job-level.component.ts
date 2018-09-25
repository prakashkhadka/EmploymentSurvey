import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-level',
  templateUrl: './job-level.component.html',
  styleUrls: ['./job-level.component.css']
})
export class JobLevelComponent implements OnInit {

  constructor( private surveyService: SurveyService, private location:Location, private router:Router ) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	//console.log("onCourse");
  	if(this.surveyService.jobLevel){
  		this.router.navigate(['/job/job-income']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
