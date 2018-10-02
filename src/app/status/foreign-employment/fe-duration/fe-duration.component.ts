import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fe-duration',
  templateUrl: './fe-duration.component.html',
  styleUrls: ['./fe-duration.component.css']
})
export class FeDurationComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.feDuration){
  		this.router.navigate(['/foreign-employment/income']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
