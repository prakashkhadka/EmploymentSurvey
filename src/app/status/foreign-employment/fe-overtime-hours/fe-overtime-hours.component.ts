import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fe-overtime-hours',
  templateUrl: './fe-overtime-hours.component.html',
  styleUrls: ['./fe-overtime-hours.component.css']
})
export class FeOvertimeHoursComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.feOvertimeHours){
  		this.router.navigate(['/foreign-employment/further-stay']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
