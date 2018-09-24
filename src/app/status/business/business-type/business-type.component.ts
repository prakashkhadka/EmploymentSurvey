import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-business-type',
  templateUrl: './business-type.component.html',
  styleUrls: ['./business-type.component.css']
})
export class BusinessTypeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location ) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

  show:boolean= false;
  otherSelected(){
  	console.log("Othe selected : " + this.show);
  	this.show = true;
  	//this.surveyService.surveyData.BusinessType = '';
  }

}
