import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fe-workdays-number',
  templateUrl: './fe-workdays-number.component.html',
  styleUrls: ['./fe-workdays-number.component.css']
})
export class FeWorkdaysNumberComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.feWorkDayNumber){
  		this.router.navigate(['/foreign-employment/overtime']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }
  goBack(){
  	this.location.back();
  }

}
