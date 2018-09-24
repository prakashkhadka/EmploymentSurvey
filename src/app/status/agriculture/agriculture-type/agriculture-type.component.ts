import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-agriculture-type',
  templateUrl: './agriculture-type.component.html',
  styleUrls: ['./agriculture-type.component.css']
})
export class AgricultureTypeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }
}
