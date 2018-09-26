import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location }  from '@angular/common';
import { SurveyService } from '../../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fe-furtherstay',
  templateUrl: './fe-furtherstay.component.html',
  styleUrls: ['./fe-furtherstay.component.css']
})
export class FeFurtherstayComponent implements OnInit {

  constructor(private surveyService:SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.feFurtherStay){
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
