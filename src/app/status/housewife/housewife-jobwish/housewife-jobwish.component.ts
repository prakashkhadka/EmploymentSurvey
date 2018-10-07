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

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.housewifeWish){
  		this.router.navigate(['/position']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
