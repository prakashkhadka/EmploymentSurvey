import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-fe-overtime',
  templateUrl: './fe-overtime.component.html',
  styleUrls: ['./fe-overtime.component.css']
})
export class FeOvertimeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
