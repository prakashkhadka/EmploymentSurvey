import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dream-job',
  templateUrl: './dream-job.component.html',
  styleUrls: ['./dream-job.component.css']
})
export class DreamJobComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.dreamJob){
  		if(this.surveyService.dreamJob.length > 1 && this.surveyService.dreamJob.length < 29){
  			this.router.navigate(['/position']);
  		}
  		else{
  			this.isInvalid = true;
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
