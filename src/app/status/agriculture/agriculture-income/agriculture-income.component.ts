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

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.agricultureIncome){
  		this.router.navigate(['/position']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
