import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-dream-job',
  templateUrl: './dream-job.component.html',
  styleUrls: ['./dream-job.component.css']
})
export class DreamJobComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
