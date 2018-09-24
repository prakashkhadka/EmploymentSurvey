import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-dropout-reason',
  templateUrl: './dropout-reason.component.html',
  styleUrls: ['./dropout-reason.component.css']
})
export class DropoutReasonComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
