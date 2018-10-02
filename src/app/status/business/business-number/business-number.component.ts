import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-number',
  templateUrl: './business-number.component.html',
  styleUrls: ['./business-number.component.css']
})
export class BusinessNumberComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  	
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.businessNumber){
  		this.router.navigate(['/name']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

  

  

}
