import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agriculture-income',
  templateUrl: './agriculture-income.component.html',
  styleUrls: ['./agriculture-income.component.css']
})
export class AgricultureIncomeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	//console.log("onCourse");
  	if(this.surveyService.agricultureIncome){
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
