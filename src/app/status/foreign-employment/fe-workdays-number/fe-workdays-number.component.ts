import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-fe-workdays-number',
  templateUrl: './fe-workdays-number.component.html',
  styleUrls: ['./fe-workdays-number.component.css']
})
export class FeWorkdaysNumberComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }
  goBack(){
  	this.location.back();
  }

}
