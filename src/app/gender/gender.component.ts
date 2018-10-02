import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurveyService } from '../survey.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  constructor(public surveyService: SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.gender){
  		this.router.navigate(['/location']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }
  
  goBack(){
  	this.location.back();
  }
  

}
