import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retired-time',
  templateUrl: './retired-time.component.html',
  styleUrls: ['./retired-time.component.css']
})
export class RetiredTimeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.retiredTime){
  		this.router.navigate(['/retired/service-duration']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }
  goBack(){
  	this.location.back();
  }

}
