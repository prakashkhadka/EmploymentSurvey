import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location }  from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-fe-furtherstay',
  templateUrl: './fe-furtherstay.component.html',
  styleUrls: ['./fe-furtherstay.component.css']
})
export class FeFurtherstayComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }
}
