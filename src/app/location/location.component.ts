import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loation',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor( private surveyService: SurveyService, private location:Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.location == "Overseas"){
  		this.router.navigate(['/country']);
  	}
  	else if(this.surveyService.location == "Nepal"){
  		this.router.navigate(['/employment-status']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
