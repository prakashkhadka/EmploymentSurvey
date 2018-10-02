import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fe-overtime',
  templateUrl: './fe-overtime.component.html',
  styleUrls: ['./fe-overtime.component.css']
})
export class FeOvertimeComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.feOvertime){
  		if(this.surveyService.feOvertime == 'Yes'){
  			this.router.navigate(['/foreign-employment/overtime-hours']);
  		}
  		else if(this.surveyService.feOvertime == 'No'){
  			this.router.navigate(['/foreign-employment/further-stay'])
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
