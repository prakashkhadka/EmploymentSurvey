import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurveyService } from '../survey.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highest-education',
  templateUrl: './highest-education.component.html',
  styleUrls: ['./highest-education.component.css']
})
export class HighestEducationComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location: Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.highestEducationLevel){
  		this.router.navigate(['/gender']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
