import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Location } from '@angular/common';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-overseas-purpose',
  templateUrl: './overseas-purpose.component.html',
  styleUrls: ['./overseas-purpose.component.css']
})
export class OverseasPurposeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }
  goBack(){
  	this.location.back();
  }

}
