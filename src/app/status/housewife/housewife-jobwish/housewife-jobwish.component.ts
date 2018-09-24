import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service'

@Component({
  selector: 'app-housewife-jobwish',
  templateUrl: './housewife-jobwish.component.html',
  styleUrls: ['./housewife-jobwish.component.css']
})
export class HousewifeJobwishComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  ngOnInit() {
  }

  goBack(){
  	this.location.back();
  }

}
