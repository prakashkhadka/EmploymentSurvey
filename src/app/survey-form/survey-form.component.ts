import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  constructor( private surveyService: SurveyService) { }

  ngOnInit() {
  }
  
  /*
  submit(){
  	console.log("Submit Button clicked");
  	this.surveyService.submit();
  }
  */

 
  }

