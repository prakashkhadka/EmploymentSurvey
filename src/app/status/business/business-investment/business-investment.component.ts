import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-business-investment',
  templateUrl: './business-investment.component.html',
  styleUrls: ['./business-investment.component.css']
})
export class BusinessInvestmentComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
