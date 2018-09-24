import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  constructor(private surveyService: SurveyService, private location:Location) { }

  ngOnInit() {
  	console.log(this.surveyService.surveyData);
  }
  
  goBack(){
  	this.location.back();
  }
  

}
