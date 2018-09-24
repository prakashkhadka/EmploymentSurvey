import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';

@Component({
  selector: 'app-business-number',
  templateUrl: './business-number.component.html',
  styleUrls: ['./business-number.component.css']
})
export class BusinessNumberComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location) { }

  showThis:boolean;
  
  ngOnInit() {
  	this.showThis = false;
  }

  goBack(){
  	this.location.back();
  }

  

  yesSelected(){
  	this.showThis = false;
  }
  noSelected(){
  	console.log("No selected");
  	this.showThis = true;
  }

}
