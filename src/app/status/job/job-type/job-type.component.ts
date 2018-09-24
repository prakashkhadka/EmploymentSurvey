import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../../survey.service'
import { NgForm } from "@angular/forms";
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-type',
  templateUrl: './job-type.component.html',
  styleUrls: ['./job-type.component.css']
})
export class JobTypeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
