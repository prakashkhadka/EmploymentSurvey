import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employement-status',
  templateUrl: './employement-status.component.html',
  styleUrls: ['./employement-status.component.css']
})
export class EmployementStatusComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  	console.log(this.surveyService.surveyData);
  }

  goBack(){
  	this.location.back();
  }

}
