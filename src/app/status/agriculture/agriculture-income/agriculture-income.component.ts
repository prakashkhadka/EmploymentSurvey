import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-agriculture-income',
  templateUrl: './agriculture-income.component.html',
  styleUrls: ['./agriculture-income.component.css']
})
export class AgricultureIncomeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
