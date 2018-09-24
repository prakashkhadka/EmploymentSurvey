import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-retired-time',
  templateUrl: './retired-time.component.html',
  styleUrls: ['./retired-time.component.css']
})
export class RetiredTimeComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }
  goBack(){
  	this.location.back();
  }

}
