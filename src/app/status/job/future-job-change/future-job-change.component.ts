import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-future-job-change',
  templateUrl: './future-job-change.component.html',
  styleUrls: ['./future-job-change.component.css']
})
export class FutureJobChangeComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.futureJobChange){
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
