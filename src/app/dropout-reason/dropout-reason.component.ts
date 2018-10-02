import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropout-reason',
  templateUrl: './dropout-reason.component.html',
  styleUrls: ['./dropout-reason.component.css']
})
export class DropoutReasonComponent implements OnInit {

  constructor(public surveyService:SurveyService, private location: Location, private router:Router) { }

  ngOnInit() {
  }

  isInvalid:boolean = false;
  onSubmit(){
  	if(this.surveyService.dropoutReason){
  		this.router.navigate(['/highest-education']);
  	}
  	else{
  		this.isInvalid = true;
  	}
  }

  goBack(){
  	this.location.back();
  }

}
