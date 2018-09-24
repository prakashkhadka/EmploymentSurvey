import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-job-level',
  templateUrl: './job-level.component.html',
  styleUrls: ['./job-level.component.css']
})
export class JobLevelComponent implements OnInit {

  constructor( private surveyService: SurveyService, private location:Location ) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
