import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-employee-number',
  templateUrl: './employee-number.component.html',
  styleUrls: ['./employee-number.component.css']
})
export class EmployeeNumberComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  	//console.log("Business type is: " + this.surveyService.surveyData.BusinessType);
  }

  goBack(){
  	this.location.back();
  }

}
