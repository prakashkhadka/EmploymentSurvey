import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-fe-overtime-hours',
  templateUrl: './fe-overtime-hours.component.html',
  styleUrls: ['./fe-overtime-hours.component.css']
})
export class FeOvertimeHoursComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
