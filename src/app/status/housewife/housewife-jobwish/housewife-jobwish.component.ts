import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-housewife-jobwish',
  templateUrl: './housewife-jobwish.component.html',
  styleUrls: ['./housewife-jobwish.component.css']
})
export class HousewifeJobwishComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	//console.log("onCourse");
  	if(this.surveyService.housewifeWish){
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
